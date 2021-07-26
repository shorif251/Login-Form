const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get the values from the input
    const usernameValue = username.value.trim() ;
    const emailValue = email.value.trim() ;
    const password1Value = password1.value.trim() ;
    const password2Value = password2.value.trim() ;
    //Username
    if( usernameValue === '' ){
        //show error
        //add rror class
        setErrorFor(username, 'Username cannot be blank');
    }
    else{
        //add success class
        setSuccessFor(username, 'username is valid');
    }
    //Email
    if(emailValue === ''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }
    //Password
    if(password1Value ===''){
        setErrorFor(password1, 'Password cannot be blank');
    }
    else if(password1Value.length >= 15){
        setErrorFor(password1, 'Password not more than 15')
    }
    else if(password1Value.length <= 6){
        setErrorFor(password1, 'Password minimum 6 character')
    }
    else{
        setSuccessFor(password1);
    }  
    //Check Password
    if(password2Value === ''){
        setErrorFor(password2, 'Password cannot be blank');
    }
    else if(password1Value !== password2Value){
        setErrorFor(password2, 'Password does not match');
    }
    else{
        setSuccessFor(password2);
    }   
}

function setErrorFor(input, message){
    const formControl = input.parentElement;    //form-control
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error' ;
}
function setSuccessFor(input){
    const formControl = input.parentElement ;
    formControl.className = 'form-control success';
}
function isEmail (email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

