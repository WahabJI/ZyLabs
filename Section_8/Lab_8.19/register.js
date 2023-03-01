function checkForm() {
   const name = document.getElementById('fullName');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const passwordConfirm = document.getElementById('passwordConfirm');
   const error = document.getElementById('formErrors');
   let errorsFound = false;
   error.innerHTML += '<ul>'
   console.log(name.value.length)
   console.log(email.value.length)
   console.log(password.value.length)
   console.log(passwordConfirm.value.length)
   if(!name.value) {
      errorsFound = true;
      error.innerHTML += '<li>Missing full name.</li>';
      name.classList.add('error');
   }
   if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
      errorsFound = true;
      error.innerHTML += '<li>Invalid or missing email address.</li>';
      email.classList.add('error');
   }
   if(password.value.length < 10 || password.value.length > 20) {
      errorsFound = true;
      error.innerHTML += '<li>Password must be between 10 and 20 characters.</li>';
      password.classList.add('error');
   }
   if (!password.value || !/[a-z]/.test(password.value)){
      errorsFound = true;
      error.innerHTML += '<li>Password must contain at least one lowercase character.</li>';
      password.classList.add('error');
   }
   if (!password.value || !/[A-Z]/.test(password.value)){
      errorsFound = true;
      error.innerHTML += '<li>Password must contain at least one uppercase character.</li>';
      password.classList.add('error');
   }
   if (!password.value || !/[0-9]/.test(password.value)){
      errorsFound = true;
      error.innerHTML += '<li>Password must contain at least one digit.</li>';
      password.classList.add('error');
   }
   if (password.value != passwordConfirm.value){
      errorsFound = true;
      error.innerHTML += '<li>Password and confirmation password don\'t match.</li>';
      passwordConfirm.classList.add('error');
      password.classList.add('error');
   }
   error.innerHTML += '</ul>'
   if(errorsFound) {
      error.classList.remove('hide');
   }
   else{
      error.classList.add('hide');
      name.classList.remove('error');
      email.classList.remove('error');
      password.classList.remove('error');
      passwordConfirm.classList.remove('error');

   }


}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});