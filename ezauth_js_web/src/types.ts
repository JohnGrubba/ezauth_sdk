export interface UserInfo {
    username: string;
    email: string;
    createdAt: string;
    [key: string]: any
}

export interface ErrorDetail {
    detail: string;
}