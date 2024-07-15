export class EZAuthServerAdapter {
    server_url: string;
    profile_info: JSON | null = null;
    session_id: string;

    constructor(server_url: string, session_id: string) {
        this.server_url = server_url.replace(/\/$/, '');
        this.session_id = session_id;
        console.log('EZAuth initialized');
    }
}