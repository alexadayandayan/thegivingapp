export interface IMember {
    Id: number;
    Name: string;
    Email: string;
    Address: string;
    Phone: string;
    DateOfBirth: string;
    Image: string;
    Document: string;
    IsActive: number;
    IsDeleted: number;
}

export interface IMemberFormState {
    id: number | null;
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
    address: string;
    phone: string;
    dateOfBirth: string;
    image: File | null;
    document: File | null;
    isActive: string;
    isDeleted: number | null;
  }
