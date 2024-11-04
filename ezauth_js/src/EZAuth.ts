import { User, Session } from "./types";

export class EZAuthClient {
    server_url: string;
    profile?: User;
    session?: Session;

    async #authorizedFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
        try {
            const response = await fetch(`${this.server_url}/${endpoint}`, {
                ...options,
                credentials: "include",
                headers: {
                    ...options.headers,
                    'cookie': `session=${this.session?.session_token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            throw new Error("Could not reach server.");
        }
    }

    constructor(server_url: string, session_id?: string) {
        this.server_url = server_url.replace(/\/$/, '');
        if (session_id)
            this.session = { session_token: session_id, expires: undefined }
        console.info("EZAuthClient initialized.");
    }

    /**
     * Connects to the server and fetches the profile of the user (if session_id is provided).
     * 
     * @example
     * const client = new EZAuthClient('http://localhost:3250', "dce70fca-15bc-44fd-aa89-651c8d75b443")
     * // You can also set the session_id later
     * client.session_id = "dce70fca-15bc-44fd-aa89-651c8d75b443"
     * // Connect to the server and fetch the profile if session_id is provided
     * await client.connect()
     * 
     * @returns Promise<void>
     */
    async connect() {
        const resp = await this.#authorizedFetch("up")
        if (!resp.ok) {
            throw new Error("Could not verify servers status.");
        }
        try {
            const response = await this.#authorizedFetch("profile")
            this.profile = await response.json();
        } catch (error) {
            return;
        }
    }

    /**
     * Logs in the user with the provided credentials and creates new Session. Automatically fetches Profile info if successful.
     * @param identifier Identifier for the Account (E-Mail or Username)
     * @param password Password for the Account (Plain Text)
     * @param two_factor Two Factor Code (if enabled)
     * @example
     * await client.login("string", "Kennwort1!")
     * console.log(client.profile?.email)
     */
    async login(identifier: string, password: string, two_factor?: string): Promise<void> {
        const response = await this.#authorizedFetch("login", {
            method: 'POST',
            body: JSON.stringify({
                identifier: identifier,
                password: password,
                two_factor_code: two_factor
            })
        })
        if (response.status === 200) {
            this.session = await response.json();
            await this.connect();
        }
        else {
            throw new Error((await response.json())["detail"]);
        }
    }

    /**
     * Creates a Account with the provided credentials. If E-Mail Confirmation is needed, check the function `confirmEmail`.
     * @param username Username of the Account (unique)
     * @param password Password for the Account (Plain Text)
     * @param email E-Mail of the Account (unique)
     * @param additionalData Additional Data for the Account (optional)
     */
    async signup(username: string, password: string, email: string, additionalData: object = {}) {
        const response = await this.#authorizedFetch("signup", {
            method: 'POST',
            body: JSON.stringify({
                ...additionalData,
                email: email,
                username: username,
                password: password
            })
        })
        if (response.status === 200) {
            console.info("Account created.");
            this.session = await response.json();
            await this.connect();
        } else if (response.status === 204) {
            console.info("E-Mail Confirmation needed.");
        } else if (response.status === 409) {
            throw new Error("Username or E-Mail already in use.");
        } else {
            throw new Error("Could not create Account.");
        }
    }

    async confirmEmail(token: string) { }
}