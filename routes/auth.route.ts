import { Router } from "express";
import { login, register } from "../controller/auth.controller";

const route = Router();

route.post("/login", login);
route.post("/register", register);

export default route;
