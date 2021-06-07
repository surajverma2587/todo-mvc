const renderDashboard = (req, res) => {
  const { firstName, lastName } = req.session;

  res.render("DASHBOARD", { firstName, lastName });
};

module.exports = { renderDashboard };
