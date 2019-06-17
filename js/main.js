
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
// Modal

var modal = document.querySelector(".modal");
var nodes = document.querySelectorAll('.trigger');
var trigger = nodes[0];
var trigger1 = nodes[1];
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
    $('#hiding').removeClass('button-clicked');
   $('#onend').addClass('button-clicked');

  }
}

trigger.addEventListener("click", toggleModal);
trigger1.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//
$('#contactForm').submit(function () {
  // sendContactForm();
  $('#onend').removeClass('button-clicked');
  $('#hiding').addClass('button-clicked');
  return false;
});
