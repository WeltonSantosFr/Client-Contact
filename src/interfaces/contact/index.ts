export interface IContact {
  name: string;
  email: string;
  phone: number;
  registry_date: Date;
}

export interface IContactRequest {
  name: string;
  email: string;
  phone: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
