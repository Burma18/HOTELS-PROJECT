var loginBtn = document.getElementById("loginBtn");

// add a click event listener to the login button
loginBtn.addEventListener("click", function (event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // create a new form element
  var form = document.createElement("form");

  // set the form attributes, including the endpoint URL and the method
  form.setAttribute("method", "POST");
  form.setAttribute("action", "/login");

  // create an input element for the username
  var usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("name", "username");
  form.appendChild(usernameInput);

  // create an input element for the password
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  form.appendChild(passwordInput);

  // add the form to the page and submit it
  document.body.appendChild(form);
  form.submit();
});
