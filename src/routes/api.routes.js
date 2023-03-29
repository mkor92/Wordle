import { Router } from "express";
import words from "../getWords.js";

const router = Router();

router.get("/words", async (req, res) => {
  res.json(words);
});

export default router;
