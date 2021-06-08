const handleSubmit = async (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    console.log("YOU NEED TO ENTER SOMETHING");
    return;
  }

  if (password === confirmPassword) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }),
    };

    const response = await fetch("/auth/signup", options);

    if (response.status !== 200) {
      console.log("FAILED SIGN UP");
    } else {
      window.location.replace("/login");
    }
  } else {
    console.log(
      "PASSWORDS DO NOT MATCH! *Ahem* Please make sure your caps lock is not on!"
    );
  }
};

$("#signup-form").submit(handleSubmit);
