import { Router } from "express";
import { dataA } from "../controller/data.controller";

const route = Router();

route.get("/analysis", dataA);

export default route;
