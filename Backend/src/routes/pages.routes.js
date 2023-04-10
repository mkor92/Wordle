import { Router } from "express";
import menu from "../../static/JS/menu.js";
const router = Router();

function menuWithActive(items, path) {
  return items.map((item) => ({
    active: item.link == path,
    ...item,
  }));
}

router.get("/", async (req, res) => {
  res.render("index", {
    menu: menuWithActive(menu, "/"),
  });
});

router.get("/highscore", async (req, res) => {
  res.render("highscore", {
    menu: menuWithActive(menu, "/highscore"),
  });
});

export default router;
