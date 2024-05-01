import axios from "axios";

import {
  LoginRequestBody,
  RegisterRequestBody,
  RegisterResponseBody,
} from "../models/auth";

export class AuthService {
  static loginApi(body: LoginRequestBody) {
    return axios.post("/api/login/", body);
  }

  static registerApi(body: RegisterRequestBody) {
    return axios.post<RegisterResponseBody>("/api/register", body);
  }

  /*static getProfile() {
    return axios.get("/api/users/getProfile", {
      headers: {
        "x-auth-token": localStorage.getItem("token") || "",
      },
    });
  }*/
}
