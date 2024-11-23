var signUpForm = document.getElementById("signUpForm");
var passwordInput = document.getElementById("password");
var passwordMessage = document.getElementById("passwordMessage");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var password = passwordInput.value.trim();

  // Check if password is longer than 9 characters
  if (password.length > 9) {
    passwordMessage.textContent = "Password is too long!";
    return;
  }

  // If valid, display success (or submit to server)
  alert("Sign-Up Successful!");
  passwordMessage.textContent = ""; // Clear any error messages
});
