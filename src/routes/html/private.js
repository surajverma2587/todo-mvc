const { Router } = require("express");

const {
  renderDashboard,
  renderEditTodo,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/edit/:id", renderEditTodo);

module.exports = router;
