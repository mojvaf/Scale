import { IUserTokenPayload } from "./user.model";
import { Request } from "express";
export interface AppRequest extends Request {
  user: IUserTokenPayload;
}
