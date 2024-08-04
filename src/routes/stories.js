import { Router } from "express";
import {
  getStories,
  getStory,
  addStory,
  deleteStory,
  updateStory,
} from "../controllers/storiesController.js";

const router = Router();

router.get("/", getStories);
router.get("/:id", getStory);
router.post("/create", addStory);
router.delete("/delete", deleteStory);
router.put("/update", updateStory);

export default router;
