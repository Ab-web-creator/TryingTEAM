// This js makes SUBmenus expand


$('.feat-btn').click(function() {
    $('aside ul .feat-show').toggleClass("show");
    $('aside ul .firstMenuPackOpener').toggleClass("rotate");
  });

  $('.serv-btn').click(function() {
    $('aside ul .serv-show').toggleClass("show1");
    $('aside ul .secondMenuPackOpener').toggleClass("rotate");
  });

  $('.theory-btn').click(function() {
    $('aside ul .theory-show').toggleClass("show2");
    $('aside ul .thirdMenuPackOpener').toggleClass("rotate");
  });

  $('.aside ul li').click(function() {
    $(this).addClass("active").siblings().removeClass("active"); 
  });