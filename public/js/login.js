const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const loginButton = document.getElementById('loginButton');
const loginEmail = document.getElementById('mail-login');
const loginPas = document.getElementById('pass-login');
const signiupName = document.getElementById('name-signup');
const signupMail = document.getElementById('mail-signup');
const signupPas = document.getElementById('pass-signup');
const signupButton = document.getElementById('signupButton');


// changin between the login and signup windows
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
loginEmail.addEventListener('input', ()=>{
    if(emailRegex.test(loginEmail.value)){
        loginEmail.style.color = "black";
    }
    else{
        loginEmail.style.color = "red";
    }
});
loginButton.addEventListener('click', function(){
    if(loginEmail.value != '' && loginPas.value != ''){
        if(!emailRegex.test(loginEmail.value)){
            loginEmail.style.color = "red";
            alert("Invalid emial ID");
        }
    }
    else{
        alert("Please fill out all the fields");
    }
});

signupMail.addEventListener('input', ()=>{
    if(emailRegex.test(signupMail.value)){
        signupMail.style.color = "black";
    }
    else{
        signupMail.style.color = "red";
    }
});
signupButton.addEventListener('click', ()=>{
    if(signiupName.vale != "" && signupMail.value != "" && signupPas.value != ""){
        if(emailRegex.test(signupMail.value)){
            signupMail.style.color = 'black';
        }else{
            signupMail.style.color = 'red';
            alert("Invalid Emial ID");
        }
    }else{
        alert("Please Fill all the fields");
    }
})


window.onload=()=>{
   const message =document.getElementById('messageconatiner').innerHTML;
   if(message){
    alert(message)
    if(message=='Account nor fount, Try signin'){
        container.classList.add("right-panel-active");
    }
   }
}