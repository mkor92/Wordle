import { Router } from "express";
import words from "../getWords.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { list } from "../model.js";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

/*const example = new list({
  name: "Markus",
  time: 455,
  guesses: 50,
  wordLength: 1,
  unique: false,
});
await example.save();
const result = await list.find({});
console.log(result);

list.find().then((users) => {
  console.log(users);
});*/

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
