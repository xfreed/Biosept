
$(document).ready(function () {
  $('.burger').click(function () {
    $('body').toggleClass('active');
  });
  $('.mobile-menu li a').click(function () {
    $('body').removeClass('active');
  });
});
$(window).scroll(function () {
  var the_top = $(document).scrollTop();
  if (the_top > 83) {
    $('.top-menu').addClass('fixed');
  }
  else {
    $('.top-menu').removeClass('fixed');
  }
})