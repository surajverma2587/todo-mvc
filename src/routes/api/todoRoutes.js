const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("get all");
});

router.get("/:id", (req, res) => {
  res.send("get one");
});

router.post("/", (req, res) => {
  res.send("create");
});

router.put("/:id", (req, res) => {
  res.send("update");
});

router.delete("/:id", (req, res) => {
  res.send("delete");
});

module.exports = router;
