export interface RegisterRequestBody {
  fullName: string;
  email: string;
  password: string;
  role: string;
}
export interface LoginRequestBody {
  email: string;
  password: string;
}
export interface RegisterResponseBody {
  token: string;
}
