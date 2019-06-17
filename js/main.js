
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
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
