import { ErrorDetail, UserInfo } from "./types"

export class EZAuthClient {
    server_url: string;
    profile_info: UserInfo;
    session_id: string;

    constructor(server_url: string, session_id: string = "") {
        this.server_url = server_url.replace(/\/$/, '');
        this.session_id = session_id;
        console.log('EZAuth initialized');
    }

    async authorizedFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
        const response = await fetch(`${this.server_url}/${endpoint}`, {
            ...options,
            credentials: "include",
            headers: {
                ...options.headers,
                'cookie': `session=${this.session_id}`
            }
        });
        return response;
    }

    async logout(): Promise<undefined> {
        const response = await this.authorizedFetch("logout")
        this.session_id = "";
        if (response.status === 204) {
            console.info("Logged Out");
        } else {
            const errorDetail: ErrorDetail = await response.json();
            throw errorDetail;
        }
    }

    async init(): Promise<UserInfo> {
        const resp = await this.authorizedFetch("up")
        if (!resp.ok) {
            return;
        }
        try {
            const response = await this.authorizedFetch("profile")
            if (!response.ok) {
                return;
            }
            this.profile_info = await response.json();
            return this.profile_info;
        } catch (error) {
            return;
        }

    }

    async signup(email: string, username: string, password: string, user_data?: JSON): Promise<string | JSON> {
        const response = await this.authorizedFetch("signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...user_data,
                email: email,
                username: username,
                password: password
            })
        })
        if (response.status === 200) {
            console.info("User Created and Logged In");
            this.session_id = (await response.json())["session_token"];
            return this.session_id
        } else if (response.status === 204) {
            console.info("Confirmation E-Mail was sent");
        } else {
            const errorDetail = await response.json();
            throw errorDetail;
        }
    }

    async login(credential: string, password: string, two_factor?: string | undefined): Promise<string | JSON> {
        const response = await this.authorizedFetch("login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: credential,
                password: password,
                two_factor_code: two_factor
            }),
            credentials: "include"
        })
        if (response.status === 200) {
            console.info("Logged In");
            this.session_id = (await response.json())["session_token"];
            return this.session_id
        }
        else {
            const errorDetail = await response.json();
            throw errorDetail;
        }
    }
}