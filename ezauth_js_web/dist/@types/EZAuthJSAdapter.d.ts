export declare class EZAuthClient {
    server_url: string;
    profile_info: JSON | null;
    constructor(server_url: string);
    logout(): Promise<undefined>;
    init(): Promise<JSON | undefined>;
    signup(email: string, username: string, password: string, user_data: JSON): Promise<undefined>;
    login(credential: string, password: string, two_factor: string | undefined): Promise<undefined>;
}
