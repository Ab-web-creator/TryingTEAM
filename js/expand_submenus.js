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

    // Вот здесь если напишем код который пройдет forEach и убирает у всех класс (например, "show", "show1" и "show2")
    $('aside ul .feat-show.show').removeClass("show");
    $('aside ul .serv-show.show1').removeClass("show1");
    $('aside ul .theory-show.show2').removeClass("show2");
 

    $(this).addClass("active").siblings().removeClass("active"); 
  });