const onDelete = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(
    `http://localhost:3000/api/todos/${id}`,
    options
  );

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    window.location.replace("/dashboard");
  }
};

const onEditTodo = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const title = $("#title").val();
  const description = $("#description").val();
  const status = $("#status").find(":selected").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      description,
      status,
    }),
  };

  const response = await fetch(
    `http://localhost:3000/api/todos/${id}`,
    options
  );

  if (response.status !== 200) {
    console.log("FAILED UPDATE");
  } else {
    window.location.replace("/dashboard");
  }
};

$('[name="delete-btn"]').click(onDelete);
$('[name="edit-todo-form"]').submit(onEditTodo);
