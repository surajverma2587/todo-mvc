const onClick = async (event) => {
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

$('[name="delete-btn"]').click(onClick);
