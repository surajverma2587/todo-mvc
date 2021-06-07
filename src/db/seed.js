require("dotenv").config();
const sequelize = require("../config/connection");
const todo = require("../models/todo");
const user = require("../models/user");
const todos = require("./todos.json");
const users = require("./users.json");

const seed = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(users);

  console.log("Seeded users");

  await todo.bulkCreate(todos);

  console.log("Seeded todos");

  process.exit(0);
};

seed();
