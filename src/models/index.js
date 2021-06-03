const Todo = require("./todo");
const User = require("./user");

Todo.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Todo, {
  foreignKey: "user_id",
});

module.exports = { User, Todo };
