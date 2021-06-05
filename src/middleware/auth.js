const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.status(401).json({ error: "User not logged in" });
  }
};

module.exports = auth;
