export class EZAuth {
    server_url: string;

    constructor(server_url: string) {
        this.server_url = server_url.replace(/\/$/, '');
        console.log('EZAuth initialized');
    }

    async health(): Promise<boolean> {
        const response = await fetch(`${this.server_url}/up`);
        return response.ok;
    }

    async signup(email: string, username: string, password: string, user_data: JSON): Promise<boolean> {
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
            }),
        });
        return response.ok;
    }
}