import { Router } from "express";
import menu from "../../public/JS/menu.js";
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

router.get("/about", async (req, res) => {
  res.render("about", {
    menu: menuWithActive(menu, "/about"),
  });
});

export default router;
