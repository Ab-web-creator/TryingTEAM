// This js makes SUBmenus expand

$('.feat-btn').click(function () {
  setTimeout(() => {
  if ($('.serv-show').hasClass('show_submenus')) {
    $('.serv-show').toggleClass('show_submenus')
    $('.serv-show').toggleClass('feat-btn')

  }
  if ($('.theory-show').hasClass('show_submenus')) {
    $('.theory-show').toggleClass('show_submenus')
    $('.theory-show').toggleClass('feat-btn')

  }

  $('.feat-show').toggleClass('show_submenus')
  $('.feat-show').toggleClass('feat-btn')

  $('.firstMenuPackOpener').toggleClass('rotate')
  $('').classList.add("active")
  }, 0)
})

$('.serv-btn').click(function () {
  if ($('.feat-show').hasClass('show_submenus')) {
    $('.feat-show').toggleClass('show_submenus')
  }
  if ($('.theory-show').hasClass('show_submenus')) {
    $('.theory-show').toggleClass('show_submenus')
  }
  $('.serv-show').toggleClass('show_submenus')
  $('.secondMenuPackOpener').toggleClass('rotate')
})

$('.theory-btn').click(function () {
  if ($('.feat-show').hasClass('show_submenus')) {
    $('.feat-show').toggleClass('show_submenus')
  }
  if ($('.serv-show').hasClass('show_submenus')) {
    $('.serv-show').toggleClass('show_submenus')
  }

  $('.theory-show').toggleClass('show_submenus')
  $('.thirdMenuPackOpener').toggleClass('rotate')
})


$('aside ul li').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
})
