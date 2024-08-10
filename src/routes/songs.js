import { Router } from "express";
import {
  getSong,
  getSongs,
  getSongsByCategory,
  updateSong,
} from "../controllers/songsController.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.get(ROUTES.SONGS[1].DEFAULT, getSongs);
router.get(ROUTES.SONGS[1].DETAILS, getSong);
router.get(ROUTES.SONGS[1].UPDATE, updateSong);
router.get(ROUTES.SONGS[1].CATEGORY, getSongsByCategory);

export default router;
