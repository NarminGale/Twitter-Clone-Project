$('select').focus(function (e) {
  $(e.target).prev('.upper-label').css('color', 'rgba(29, 161, 242, 1)')
})

$('select').blur(function (e) {
  $(e.target).prev('.upper-label').css('color', 'rgb(91, 112, 131)')
})

$('.use-Email').click(function () {
  if ($('.phone-input').hasClass('displaying')) {
    $('.phone-input').addClass('test')
    $('.phone-input').removeClass('displaying')
  } else {
    $('.phone-input').removeClass('test')
    $('.phone-input').addClass('displaying')
  }
  if ($('.testo').hasClass('test')) {
    $('.testo').removeClass('test')
    $('.testo').addClass('displaying')
  } else {
    $('.testo').addClass('test')
    $('.testo').removeClass('displaying')
  }
})

$('.name-input').focus(function () {
  $('.limited-number').css('display', 'inline-block')
})
$('.name-input').blur(function () {
  $('.limited-number').css('display', 'none')
})

let count = 0

$('.name-input').keypress(function () {
  $('.limited-number span').text(count)
  let a = $('.limited-number span').text()
  if (parseInt(a) < 50) {
    count++
  } else if (parseInt(a) === 50) {
    return false
  }
})
// $('.name-input').keydown(function (event) {
//   var key = event.keyCode || event.charCode

//   console.log(key)

// })
