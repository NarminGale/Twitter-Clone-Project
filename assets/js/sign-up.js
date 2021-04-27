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

$(document).ready(function () {
  $('.name-input').focus(function () {
    $('#name-label').css('color', '#1da1f2')
    $('.name-input').css('border', '2px solid #1da1f2')
  })
})

$('.name-input').focus(function () {
  if ($('.name-input').val() === '') {
    console.log($('.name-input').val())
    $('#name-label').css('color', 'black')
  }
})
$('.name-input').blur(function () {
  $('.limited-number').css('display', 'none')
  $('#name-label').css('color', 'rgb(91, 112, 131)')
  $('.name-input').css('border', '1px solid rgba(91, 112, 131, 0.425)')

  if ($('.name-input').val() === '') {
    $('.name-input').css('border', '1px solid rgb(224, 36, 94)')
  }
})

let count = 0

$('.name-input').keypress(function (event) {
  count++
  $('.limited-number span').text(count)
  let a = $('.limited-number span').text()
  // if (parseInt(a) < 50) {
  //   count++
  // }
  if (parseInt(a) > 50) {
    count = 50
    let a = $('.limited-number span').text('50')
    return false
  }
})

$('.name-input').keydown(function (event) {
  if (event.key === 'Backspace' || event.key === 'Delete') {
    count--
    $('.limited-number span').text(count)
    if (parseInt($('.limited-number span').text()) < 0) {
      count = 0
      let a = $('.limited-number span').text('0')
      return false
    }
  }
})

// name validation
$('.name-input').on('input', function () {
  let userValue = $(this).val()
  console.log(userValue)
  if (userValue === '') {
    $('#name-label').css('color', 'rgb(224, 36, 94)')
    $('.name-input').css('border', '2px solid rgb(224, 36, 94)')
    $('#validationServer04Feedback').css('display', 'block')
  } else {
    $('.name-input').css('border', '2px solid #1da1f2')
    $('#validationServer04Feedback').css('display', 'none')
  }
})

// phone validation

$('input[type="tel"]').on('input', function () {
  var userValue = $(this).val()
  var phoneno = /^\d{10}$/
  if (!userValue.match(phoneno)) {
    $('input[type="tel"]').css('border', '2px solid rgb(224, 36, 94)')
    $('.invalid-feedback-phone').css('display', 'block')
    $('#phone-label').css('color', 'rgb(224, 36, 94)')
  } else {
    $('#phone-label').css('color', 'rgb(91, 112, 131)')
    $('input[type="tel"]').css('border', '1px solid rgba(91, 112, 131, 0.425)')
    $('.invalid-feedback-phone').css('display', 'none')
  }
})

$('input[type="tel"]').blur(function () {
  let phoneno = /^\d{9}$/
  console.log($(this).val())
  if (!$(this).val().match(phoneno)) {
    $('input[type="tel"]').css('border', '2px solid rgb(224, 36, 94)')
    $('.invalid-feedback-phone').css('display', 'block')
    $('#phone-label').css('color', 'rgb(224, 36, 94)')
  } else {
    $('#phone-label').css('color', 'rgb(91, 112, 131)')
    $('input[type="tel"]').css('border', '1px solid rgba(91, 112, 131, 0.425)')
    $('.invalid-feedback-phone').css('display', 'none')
  }
  if ($(this).val() === '') {
    $('#phone-label').css('color', 'rgb(91, 112, 131)')
    $('input[type="tel"]').css('border', '1px solid rgba(91, 112, 131, 0.425)')
    $('.invalid-feedback-phone').css('display', 'none')
  }
})
