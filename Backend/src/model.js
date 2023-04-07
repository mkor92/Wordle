import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
  name: String,
  time: Number,
  guesses: Number,
  wordLength: Number,
  unique: Boolean,
});

const list = mongoose.model("highscore", highscoreSchema, "users");

export { list };
