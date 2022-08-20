// This js makes SUBmenus expand

$('.feat-btn').click(function () {
  if ($('.serv-show').hasClass('show')) {
    $('.serv-show').toggleClass('show')
  }
  if ($('.theory-show').hasClass('show')) {
    $('.theory-show').toggleClass('show')
  }
  $('.feat-show').toggleClass('show')
  $('.firstMenuPackOpener').toggleClass('rotate')
})

$('.serv-btn').click(function () {
  if ($('.feat-show').hasClass('show')) {
    $('.feat-show').toggleClass('show')
  }
  if ($('.theory-show').hasClass('show')) {
    $('.theory-show').toggleClass('show')
  }
  $('.serv-show').toggleClass('show')
  $('.secondMenuPackOpener').toggleClass('rotate')
})

$('.theory-btn').click(function () {
  if ($('.feat-show').hasClass('show')) {
    $('.feat-show').toggleClass('show')
  }
  if ($('.serv-show').hasClass('show')) {
    $('.serv-show').toggleClass('show')
  }

  $('.theory-show').toggleClass('show')
  $('.thirdMenuPackOpener').toggleClass('rotate')
})

$('.aside ul li').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
})
