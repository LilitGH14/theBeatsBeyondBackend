import { Router } from "express";
import {
  getStories,
  getStory,
  addStory,
  deleteStory,
  updateStory,
} from "../controllers/storiesController.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.get(ROUTES.STORIES[1].DEFAULT, getStories);
router.get(ROUTES.STORIES[1].DETAILS, getStory);
router.post(ROUTES.STORIES[1].CREATE, addStory);
router.delete(ROUTES.STORIES[1].DELETE, deleteStory);
router.put(ROUTES.STORIES[1].UPDATE, updateStory);

export default router;
