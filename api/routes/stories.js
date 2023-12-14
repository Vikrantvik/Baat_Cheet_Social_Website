import express from "express";
import { getStories, addStory, deleteStory } from "../controllers/story.js";

const router = express.Router();

// Update server-side routes
router.get("/stories", getStories);
router.post("/", addStory);
router.delete("/api/:id", deleteStory);


export default router;
