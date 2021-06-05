const { User, Todo } = require("../../models");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    return res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to get all todos" });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id, {
      include: [
        {
          model: User,
        },
      ],
    });

    if (!todo) {
      return res.status(404).json({ error: "Todo does not exist" });
    }
    return res.status(200).json(todo);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to get todo" });
  }
};

const createTodo = (req, res) => {
  res.send("create");
};

const updateTodo = (req, res) => {
  res.send("update");
};

const deleteTodo = (req, res) => {
  res.send("delete");
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
