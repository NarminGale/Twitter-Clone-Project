var email = document.querySelector('#exampleInputEmail1')
var password = document.querySelector('#exampleInputPassword1')
var btn = document.querySelector('#btn')

email.addEventListener('input', buttonCheck)
password.addEventListener('input', buttonCheck)
btn.disabled = true
function buttonCheck() {
  if (email.value === '' || password.value === '') {
    btn.disabled = true
  } else {
    btn.disabled = false
  }
}
