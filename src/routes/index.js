import { Router } from "express";
import userRoutes from "./user.js";
import songsRoutes from "./songs.js";
import storiesRoutes from "./stories.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.use(ROUTES.STORIES[0], storiesRoutes);
router.use(ROUTES.SONGS[0], songsRoutes);
router.use(ROUTES.AUTH[0], userRoutes);

export default router;
