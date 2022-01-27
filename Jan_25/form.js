/*document.write("Hii");

var url = "https://api2.binance.com/api/v3/ticker/24hr";

fetch(url).then((som) => som.json()).then((sun) => console.log(sun));
*/

var form = document.querySelector('.form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var conf_password = document.getElementById('conf_password');

/*
function validate() {
   var nameOfUser = username.value; // Thaking the value/ name typed inside the User Name
   console.log(nameOfUser);
   var formControl = username.parentElement;
   formControl.className = "form_control user";// Updating the class name
}
*/

// If we need to to check the input name is same as database or not then we use this approach
/* This is only for one input
function validate() {
   var nameOfUser = username.value;

   if (nameOfUser === "Geekster") {
      var formControl = username.parentElement;
      formControl.className = "form_control user" ;
   } else {
      var formControl = username.parentElement;
      formControl.className = "form_control failure";
      document.getElementById('error').innerText = "Username is invalid";
      
   }
}
*/

// To use same fuction for every inputs/ elemnts we have to use this approach

function validate(element) {
   var nameOfUser = element.value;

   if (nameOfUser === "Geekster") {
      var formControl = element.parentElement;
      formControl.className = "form_control success" ;
   } else {
      var formControl = element.parentElement;
      formControl.className = "form_control failure";
      //document.getElementsByClassName(element.id);   
      formControl.querySelector("small").innerText = "this is invalid";
      
      //formControl.querySelector(".email").innerText = "this email is invalid";
      //formControl.querySelector(".password").innerText = "this is password is invalid";
      //formControl.querySelector(".conf_password").innerText = "password does not match";
   }
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
   event.preventDefault(); // It will not allow to refresh the form after pressing the submit button.

   //alert("Form has been submited");

   checkUserName(username);
   checkEmail(email);
   checkPassword(password);
   checkConfPass(conf_password);
}


function checkUserName(element) {
   var nameOfUser = element.value;

   if (nameOfUser === "") {
      //var formControl = element.parentElement;
      //formControl.className = "form_control failure" ;
      //formControl.querySelector("small").innerText = "User name cannot be empty";

      // Instead of these lines we can use this one only which has been defined below
      setError(element, "User name cannot be empty")

   } else {
      onSuccess(element);
   }
}

// For each imput we have to repeat the same
/// So instead of this we can set another function for need not to repeat

function setError(element, errorMessage) {
   var formControl = element.parentElement;
   formControl.className = "form_control failure" ;
   formControl.querySelector("small").innerText = errorMessage;
}

function onSuccess(element) {
   var formControl = element.parentElement;
   formControl.className = "form_control success";
}

// To check a valid email we use this function
function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     
      email
   );
}

function checkEmail(element) {
   var userEmail = element.value;

   if (userEmail === "") {
      setError(element, "Email cannot be empty");
    } else if(!isEmail(userEmail)) {
       setError(element, "This is not a valid email");
    } else {
       onSuccess(element);
    }
}

function checkPassword(element) {
   var PasswordValue = element.value;

   var PassVal = ["(", "@", "#"];

   for(i = 0; i < PassVal.length; i++) {
      if(!PasswordValue.includes(PassVal[i])) {
         setError(element, "Password must contain (, @, #");
      } else if (PasswordValue === "") {
         setError(element, "Password cannot be empty");
      }
      else {
         onSuccess(element); 
      }
   }   
}

function checkConfPass(element) {
   var PasswordValue = password.value;
   var confirmPasswordValue = element.value;

   if (confirmPasswordValue === "") {
     setError(element, "It cannot be empty");
   } else if(PasswordValue !== confirmPasswordValue) {
      setError(element, "Password does not match");
   } else {
      onSuccess(element);
   }
}


