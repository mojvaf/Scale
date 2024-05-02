import { Router } from "express";
import { login, register } from "../controller/auth.controller";

const route = Router();

route.post("/login", login);

export default route;
