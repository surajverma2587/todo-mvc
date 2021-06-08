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

  res.render("dashboard", { firstName, lastName, todos: formattedTodos });
};

const renderEditTodo = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;

  const data = await Todo.findOne({ where: { id, user_id: userId } });

  if (!data) {
    return res.redirect("/dashboard");
  }

  const todo = data.get({ plain: true });

  res.render("editTodo", todo);
};

module.exports = { renderDashboard, renderEditTodo };
