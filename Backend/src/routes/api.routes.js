import { Router } from "express";
import words from "../getWords.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { list } from "../model.js";
dotenv.config();

mongoose.connect(
  "mongodb+srv://mkorhonen:makkiboi@wordlehighscore.5fty7xx.mongodb.net/highscore?retryWrites=true&w=majority"
);

const router = Router();

router.get("/words", async (req, res) => {
  res.json(words);
});

router.get("/highscore", async (req, res) => {
  const highscoreList = await list.find({});
  res.json(highscoreList);
});

router.post("/highscore", async (req, res) => {
  const listItem = new list(req.body);
  await listItem.save();
});

export default router;
