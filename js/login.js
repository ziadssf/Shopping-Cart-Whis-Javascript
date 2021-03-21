let username        =   document.querySelector("#username"),
    username_data   =   localStorage.getItem('username');
    
let password    =   document.querySelector("#password"),
    password_data    =   localStorage.getItem('password');

let logInBtn    =   document.querySelector('#log_in');
let message     =   document.querySelector('#message');


logInBtn.addEventListener('click',function(){
    if( username.value == "" || password.value == ""){
        message.innerHTML = "Please Fill All Data";
        message.style.padding="10px";
        message.style.backgroundColor = "rgba(255, 44, 44, 0.507)";
        message.style.borderRadius = "5px";
    }else{
        logInBtn.addEventListener("click", function(e) {
            e.preventDefault();
            if((username.value.trim() == username_data.trim()) && (password.value.trim() == password_data.trim())){

                setTimeout( ()=>{
                    window.location ='index.html';
                }, 1000)
            }else{
                message.innerHTML = "Username Or Password's Wrong Please Try Again";
                message.style.padding="10px";
                message.style.backgroundColor = "rgba(255, 44, 44, 0.507)";
                message.style.borderRadius = "5px";
            }
        })
    }
})
