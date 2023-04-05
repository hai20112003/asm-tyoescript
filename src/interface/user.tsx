export interface IUser {
    _id?: number | string;
    name?: string;
    email: string;
    password?: string;
}

export interface ISignup {
    _id?: number | string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}