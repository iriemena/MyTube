import express from "express";
import {
  deleteVideo,
  postVideo,
  updateVideo,
  getVideo,
  addView,
  random,
  trend,
  getByTags,
  search,
  sub,
} from "../controllers/videoController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, postVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/random", random);
router.get("/trend", trend);
router.get("/tags", getByTags);
router.get("/search", search);
router.get("/sub", verifyToken, sub);

export default router;
