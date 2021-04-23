var email = document.querySelector('#exampleInputEmail1')
var password = document.querySelector('#exampleInputPassword1')
var btn = document.querySelector('#btn')
var warning_div = document.querySelector('#warn');

email.addEventListener('input', buttonCheck)
password.addEventListener('input', buttonCheck)
btn.disabled = true;
function buttonCheck() {

  if (email.value === '' || password.value === '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

btn.addEventListener("click",function(){
  btn.disabled = true;
  warning_div.classList.add('warning-div');
  warning_div.innerHTML = "The username and password you entered did not match our records. Please double-check and try again.";
  email.value = '';
  password.value = '';
});
