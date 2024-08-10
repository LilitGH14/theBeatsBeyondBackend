import { Router } from "express";
import { createUser, loginUser } from "../controllers/authController.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.post(ROUTES.AUTH[1].REGISTER, createUser);
router.post(ROUTES.AUTH[1].LOGIN, loginUser);

export default router;
