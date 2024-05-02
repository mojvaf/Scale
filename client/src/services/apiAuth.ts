import axios from "axios";

import {
  LoginRequestBody,
  RegisterRequestBody,
  RegisterResponseBody,
} from "../models/auth";

export class AuthService {
  static loginApi(body: LoginRequestBody) {
    return axios.post("http://localhost:3001/api/auth/login/", body);
  }

  static registerApi(body: RegisterRequestBody) {
    return axios.post<RegisterResponseBody>(
      "http://localhost:3001/api/auth/register",
      body
    );
  }
}
