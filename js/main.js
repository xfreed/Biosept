
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
// ScrollBack
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700 
    && $(document).width()>500) {
    document.getElementById("ScrollBack").style.display = "block";
  } else {
    document.getElementById("ScrollBack").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//More
$( "#more" ).click(function() {
  $("#hiddendiv").css("display" , "block");
  $(this).css("display" , "none");
  $('.contacts').css("margin-top","30rem");
});