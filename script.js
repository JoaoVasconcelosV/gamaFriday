function saveUser() {
  let users = [];
  if(localStorage.hasOwnProperty("users")) {
  	users = JSON.parse(window.localStorage.getItem("users"));
  }
  var userEmail = document.getElementById("email");
  users.push({
  	email: userEmail.value
  });  
  if(userEmail.value !== "")
  window.localStorage.setItem("users", JSON.stringify(users));
  userEmail.value = "";
  console.log(JSON.parse(window.localStorage.getItem("users")));
  render();
}

function render() {
	var element = document.getElementById("emails");
  let users = [];
  if(localStorage.hasOwnProperty("users")) {
  	users = JSON.parse(window.localStorage.getItem("users"));
  }
  
  var emails = document.createElement("ul");
  emails.id = "emails";
  users.forEach((user) => {
  	var email = document.createElement("li");
    email.appendChild(document.createTextNode(user.email));
    emails.appendChild(email);
  });  
  element = emails;
}

window.localStorage.setItem("users", JSON.stringify([]));

render();