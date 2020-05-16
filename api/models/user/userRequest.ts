export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  mobile: string;
}

export interface UserRequest extends RegisterRequest {
  
}
