var inputMail = document.querySelector("#input-email");
var inputPassword = document.querySelector("#input-password");
var formControlMail = document.querySelector("#input-email .form-control");
var formControlPas = document.querySelector("#input-password .form-control");
var clickedSpanMail = document.querySelector("#input-email span");
var clickedSpanPassword = document.querySelector("#input-password span");


inputMail.addEventListener("click", function () {

    if (!formControlMail.classList.contains("show")) {
        formControlMail.classList.add("show");
        clickedSpanMail.classList.add("clicked-span");
    }

    inputMail.style.border = '2px solid #1DA1F2'; 

})
      

inputPassword.addEventListener("click", function () {

    if (!formControlPas.classList.contains("show")) {
        formControlPas.classList.add("show");
        clickedSpanPassword.classList.add("clicked-span");
    }
    
    inputPassword.style.border = '2px solid #1DA1F2'; 

})



/* input.addEventListener("click",function(){
    if (formControl.style.display === 'none') {
        formControl.style.display = 'block';
      } else {
        formControl.style.display = 'none';
      }
    
    */



   