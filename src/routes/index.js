const { Router } = require("express");

const apiRoutes = require("./api");

const router = Router();

router.use("/api", apiRoutes);
// router.use("/", htmlRoutes);

module.exports = router;
