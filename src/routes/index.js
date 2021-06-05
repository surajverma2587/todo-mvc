const { Router } = require("express");

const apiRoutes = require("./api");
const htmlRoutes = require("./html");
const auth = require("../middleware/auth");

const router = Router();

router.use("/api", auth, apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
