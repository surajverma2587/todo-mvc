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
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      console.log("logged out");
      return res.redirect("/login");
    });
  } else {
    return res.end();
  }
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (firstName && lastName && email && password) {
      await User.create({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });

      return res.redirect("/login");
    }

    return res.status(400).json({ error: "Failed to create user" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { login, logout, signup };
