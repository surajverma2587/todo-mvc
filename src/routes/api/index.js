const { Router } = require("express");

const todoRoutes = require("./todos");

const router = Router();

router.use("/todos", todoRoutes);

module.exports = router;
