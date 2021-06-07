const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "Failed to login" });
    }

    const validPassword = await user.isPasswordValid(password);

    if (!validPassword) {
      console.log("Invalid password");
      return res.status(404).json({ error: "Failed to login" });
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.email = user.email;
      req.session.firstName = user.first_name;
      req.session.lastName = user.last_name;

      return res.status(200).json({ data: "Login successful" });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to login" });
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({ data: "Logout successful" });
    });
  } else {
    return res.status(500).json({ error: "Failed to logout" });
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
