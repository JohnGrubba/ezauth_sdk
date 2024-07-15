export declare class EZAuthServerAdapter {
    server_url: string;
    profile_info: JSON | null;
    constructor(server_url: string);
    init(cookies: Object): Promise<boolean>;
}
