var inputMail = document.querySelector("#input-email");
var inputPassword = document.querySelector("#input-password");
var formControlMail = document.querySelector("#input-email .form-control");
var formControlPas = document.querySelector("#input-password .form-control");



inputMail.addEventListener("click", function () {

    if (!formControlMail.classList.contains("show")) {
        formControlMail.classList.add("show")
    }

})
      

inputPassword.addEventListener("click", function () {

    if (!formControlPas.classList.contains("show")) {
        formControlPas.classList.add("show")
    }

})



/* input.addEventListener("click",function(){
    if (formControl.style.display === 'none') {
        formControl.style.display = 'block';
      } else {
        formControl.style.display = 'none';
      }
    
    */



   