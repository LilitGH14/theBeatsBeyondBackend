import { Router } from "express";
import userRoutes from "./user.js";
import songsRoutes from "./songs.js";
import storiesRoutes from "./stories.js";

const router = Router();

router.use("/stories", storiesRoutes);
router.use("/songs", songsRoutes);
router.use("/auth", userRoutes);

export default router;
