export interface User {
    _id: string;
    username: string;
    email: string;
    createdAt: string;
    [key: string]: any;
}

export interface Session {
    session_token: string;
    expires: number | undefined;
}