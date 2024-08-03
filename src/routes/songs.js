import { Router } from "express";
import { getSong, getSongs } from "../controllers/songsController.js";

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSong);

export default router;
