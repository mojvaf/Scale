import { Router } from "express";
import authRoute from "./auth.route";
import dataRoute from "./data.route";

const route = Router();

route.use("/auth", authRoute);
route.use("/data", dataRoute);

export default route;
