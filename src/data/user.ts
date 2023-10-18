export interface IUser {
    Id: number;
    Username: string;
    Password: string;
    Name: string;
    CreateDate: string;
    IsDeleted: number;
}

export interface ILoginUserPayload {
    Username: string;
    Password: string;
}

export interface ICreateUserPayload {
    Email: string;
    Username: string;
    Password: string;
}