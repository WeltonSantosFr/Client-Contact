export interface IClient {
  name: string;
  email: string;
  password: string;
  phone: string;
  registry_date: Date;
}

export interface IClientRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IClientUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}
