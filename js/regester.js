let username    =   document.querySelector("#username");
let email       =   document.querySelector("#email");
let password    =   document.querySelector("#password");

let sign_in     =   document.querySelector('#sign_up');
let message     =   document.querySelector('#message');

sign_in . addEventListener('click',function(e){
    e.preventDefault()
    if( username.value == "" || email.value == "" || password.value == ""){
        message.innerHTML = "Please Fill All Data";
        message.style.padding="10px";
        message.style.backgroundColor = "rgba(255, 44, 44, 0.507)";
        message.style.borderRadius = "5px"
    } else{
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        setTimeout(function(){
            window.location = 'login.html';
        },1500)
    }
}) 