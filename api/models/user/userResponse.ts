export type UserResponse = {
  _id: string;
  alias: string;
  email: string;
};

export interface AuthResponse extends AuthToken {
  user: UserResponse;
}

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};
