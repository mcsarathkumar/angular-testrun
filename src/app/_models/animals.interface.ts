export interface AnimalStructure {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export interface UserCredentials {
  user: string;
  password: string;
}

export interface LoginResponse {
  isAdmin: boolean;
  isAuthorized: boolean;
}