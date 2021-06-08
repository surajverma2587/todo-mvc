const { User, Todo } = require("../../models");

const getTodos = async (req, res) => {
  try {
    const { userId } = req.session;

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

const updateTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;

    const todo = { title, description, status };

    const [updated] = await Todo.update(todo, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Todo does not exist" });
    }
    return res.status(200).json({ data: "Update successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to update todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Todo.destroy({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({ error: "Todo does not exist" });
    }

    return res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to delete todo" });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
