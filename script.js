
function resetErrors() {
document.getElementById("error-name").textContent = "";
document.getElementById("error-email").textContent = "";
document.getElementById("error-pwd").textContent = "";
document.getElementById("error-cpwd").textContent = "";
document.getElementById("error-agree").textContent = "";
}

function validate()
{
const name=document.getElementById("Name").value;
const email=document.getElementById("Email").value;
const pwd=document.getElementById("PWD").value;
const cpwd=document.getElementById("CPWD").value;
const agree = document.getElementById("agree").checked;


const nameError=document.getElementById("error-name");
const emailError=document.getElementById("error-email");
const pwdError=document.getElementById("error-pwd");
const cpwdError=document.getElementById("error-cpwd");
const agreeErr = document.getElementById("error-agree");

nameError.textContent="";
emailError.textContent="";
pwdError.textContent="";
cpwdError.textContent="";
agreeErr.textContent = "";

let isValid = true;


if(name==null || name=="")
{
nameError.textContent='Enter the name';
isValid = false;
}
if (email == "" || !email.includes("@") || !email.includes(".")) {
emailError.textContent = "Enter a valid email address.";
isValid = false;
}

if (pwd == "" || !pwd.length <= 8  ) {
pwdError.textContent = "Enter a valid password.";
isValid = false;
}
else if (pwd.match(/[a-z]/g) && pwd .match(/[A-Z]/g) && pwd.match(
                    /[0-9]/g) && pwd.match(
                        /[^a-zA-Z\d]/g) ){
 pwdError.textContent=" Its correct";
    isValid = true;
}
else {
 cpwdError.textContent=" Passwords Match";
    isValid = true;
}

 if(cpwd == ""){
cpwdError.textContent = "Enter a valid password.";
isValid = false;
 } 
 else if(cpwd!=pwd) {
 cpwdError.textContent=" Passwords not Match";
 isValid = false;
}
else {
 cpwdError.textContent=" Passwords Match";
    isValid = true;
}

if (!agree) {
agreeErr.textContent = "Please agree to the above information.";
isValid = false;
}

if (isValid) {
alert("Form submitted successfully!");
return true;
}
else 
{
return false;
}
}

function out(){ 
const x=document.getElementById("demo").style.color="green"; 
}

   