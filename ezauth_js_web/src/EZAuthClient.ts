export class EZAuthClient {
    server_url: string;
    profile_info: JSON | null = null;

    constructor(server_url: string) {
        this.server_url = server_url.replace(/\/$/, '');
        console.log('EZAuth initialized');
    }

    async logout(): Promise<undefined> {
        const response = await fetch(`${this.server_url}/logout`, {
            credentials: "include"
        });
        if (response.status === 200) {
            console.info("Logged Out");
        } else {
            const errorDetail = await response.json();
            throw errorDetail;
        }
    }

    async init(): Promise<boolean> {
        try {
            const response = await fetch(`${this.server_url}/up`);
            if (!response.ok) {
                return false;
            }
        } catch (error) {
            return false;
        }
        try {
            const response = await fetch(`${this.server_url}/profile`, {
                credentials: "include"
            });
            if (!response.ok) {
                return false;
            }
            this.profile_info = await response.json();
            return await response.json();
        } catch (error) {
            return false;
        }
    }

    async signup(email: string, username: string, password: string, user_data: JSON): Promise<undefined> {
        const response = await fetch(`${this.server_url}/signup`, {
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
        } else if (response.status === 204) {
            console.info("Confirmation E-Mail was sent");
        } else {
            const errorDetail = await response.json();
            throw errorDetail;
        }
    }

    async login(credential: string, password: string, two_factor: string | undefined): Promise<undefined> {
        const response = await fetch(`${this.server_url}/login`, {
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
        }
        else {
            const errorDetail = await response.json();
            throw errorDetail;
        }
    }
}