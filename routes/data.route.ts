import { Router } from "express";
import { data } from "../controller/data.controller";

const route = Router();

route.post("/analysis", data);

export default route;
