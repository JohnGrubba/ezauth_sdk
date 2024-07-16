import { UserInfo } from "./types";
export declare class EZAuthClient {
    server_url: string;
    profile_info: UserInfo;
    session_id: string;
    constructor(server_url: string, session_id?: string);
    authorizedFetch(endpoint: string, options?: RequestInit): Promise<Response>;
    logout(): Promise<undefined>;
    init(): Promise<UserInfo>;
    signup(email: string, username: string, password: string, user_data?: JSON): Promise<string | JSON>;
    login(credential: string, password: string, two_factor?: string | undefined): Promise<string | JSON>;
}
