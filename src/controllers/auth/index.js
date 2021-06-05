const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.redirect("/login");
    }

    const validPassword = await user.isPasswordValid(password);

    if (!validPassword) {
      return res.redirect("/login");
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      return res.redirect("/dashboard");
    });
  } catch (err) {
    console.error(err.message);
  }
};

const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
