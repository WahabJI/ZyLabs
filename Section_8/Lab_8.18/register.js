function checkForm() {
   const name = document.getElementById('fullName');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const passwordConfirm = document.getElementById('passwordConfirm');
   const error = document.getElementById('formErrors');
   let errorsFound = false;

   if (!name.value) {
     errorsFound = true;
     name.style = "border: 2px solid red;";
     error.style = "display: block";
     const nameErr = document.createElement("li");
     nameErr.textContent = "Missing full name.";
     error.appendChild(nameErr);
   }
   if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
     errorsFound = true;
     email.style = "border: 2px solid red;";
     error.style = "display: block";
     const emailErr = document.createElement("li");
     emailErr.textContent = "Invalid or missing email address.";
     error.appendChild(emailErr);
   }
   if (password.value.length < 10 || password.value.length > 20) {
     errorsFound = true;
     password.style = "border: 2px solid red;";
     error.style = "display: block";
     const passErr1 = document.createElement("li");
     passErr1.textContent = "Password must be between 10 and 20 characters.";
     error.appendChild(passErr1);
   }
   if (!password.value || !/[a-z]/.test(password.value)) {
     errorsFound = true;
     password.style = "border: 2px solid red;";
     error.style = "display: block";
     const passErr2 = document.createElement("li");
     passErr2.textContent = "Password must contain at least one lowercase character.";
     error.appendChild(passErr2);
   }
   if (!password.value || !/[A-Z]/.test(password.value)) {
     errorsFound = true;
     password.style = "border: 2px solid red;";
     error.style = "display: block";
     const passErr3 = document.createElement("li");
     passErr3.textContent = "Password must contain at least one uppercase character.";
     error.appendChild(passErr3);
   }
   if (!password.value || !/[0-9]/.test(password.value)) {
     errorsFound = true;
     password.style = "border: 2px solid red;";
     error.style = "display: block";
     const passErr4 = document.createElement("li");
     passErr4.textContent = "Password must contain at least one digit.";
     error.appendChild(passErr4);
   }
   if (passwordConfirm && password.value !== passwordConfirm.value) {
     errorsFound = true;
     password.style = "border: 2px solid red;";
     passwordConfirm.style = "border: 2px solid red;";
     error.style = "display: block";
     const passErr5 = document.createElement("li");
     passErr5.textContent = "Password and confirmation password don't match.";
     error.appendChild(passErr5);
   }
   if (errorsFound === false) {
     error.style = "display: none";
     name.style = "border: 1px solid #aaa;";
     email.style = "border: 1px solid #aaa;";
     password.style = "border: 1px solid #aaa;";
     passwordConfirm.style = "border: 1px solid #aaa;";
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});