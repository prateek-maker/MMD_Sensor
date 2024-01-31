import { Router } from "express";
import authRoutes from "./auth.js";

const appRoutes = Router({ mergeParams: true });

appRoutes.use("/auth", authRoutes);

export default appRoutes;
