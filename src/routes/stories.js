import { Router } from "express";
import { getStories, getStory } from "../controllers/storiesController.js";

const router = Router();

router.get("/", getStories);
router.get("/:id", getStory);

export default router;
