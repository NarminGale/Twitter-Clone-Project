var inputMail = document.querySelector("#input-email");
var inputPassword = document.querySelector("#input-password");
var formControlMail = document.querySelector("#input-email .form-control");
var formControlPas = document.querySelector("#input-password .form-control");
var clickedSpanMail = document.querySelector("#input-email span");
var clickedSpanPassword = document.querySelector("#input-password span");


var email = document.querySelector("#exampleInputEmail1")
var password = document.querySelector("#exampleInputPassword1")
var btn = document.querySelector("#btn")


inputMail.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("mb-4")){
        console.log (e.currentTarget.classList)

        if (!formControlMail.classList.contains("show")) {
            formControlMail.classList.add("show");
            clickedSpanMail.classList.add("clicked-span");
        }

        inputMail.style.border = '2px solid #1DA1F2'; 
        email.focus()
    }  
})


 

inputPassword.addEventListener("click", function () {

    if (!formControlPas.classList.contains("show")) {
        formControlPas.classList.add("show");
        clickedSpanPassword.classList.add("clicked-span");
       
    
        
    }
    inputPassword.style.border = '2px solid #1DA1F2'; 
  
password.focus()
})




email.addEventListener('input',buttonCheck); 
password.addEventListener('input',buttonCheck)
btn.disabled = true
function buttonCheck (){

if((email.value === "") || (password.value === "" ) ){
    btn.disabled = true
    
}else {
  btn.disabled = false;
}
}


