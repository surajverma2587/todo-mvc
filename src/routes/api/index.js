const { Router } = require("express");

const todoRoutes = require("./todoRoutes");

const router = Router();

router.use("/todos", todoRoutes);

module.exports = router;
