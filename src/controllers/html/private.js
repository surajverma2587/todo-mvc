const { User, Todo } = require("../../models");

const renderDashboard = async (req, res) => {
  const { firstName, lastName, userId } = req.session;

  const todos = await Todo.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: User,
      },
    ],
  });

  const formattedTodos = todos.map((todo) => todo.get({ plain: true }));

  res.render("DASHBOARD", { firstName, lastName, todos: formattedTodos });
};

module.exports = { renderDashboard };
