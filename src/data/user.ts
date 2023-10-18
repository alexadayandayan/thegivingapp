export interface IUser {
  Id: number;
  Username: string;
  Password: string;
  Name: string;
  CreateDate: string;
  IsDeleted: number;
  Roles: IRoles;
}

export interface IRoles {
  Id: number;
  RoleName: string;
  Description: string;
  IsActive: number;
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
