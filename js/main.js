$('#contactForm').submit(function () {
  var _name = $('#form_name').val();
  var _phone = $('#form_phone').val();
  $.ajax({
    url: './php/send_form_email.php',
    type: 'POST',
    data: {
      name: _name,
      phone: _phone
    },
    success: function () {
      $('#onend').removeClass('button-clicked');
      $('#hiding').addClass('button-clicked');
    }
  });

  return false;
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleModal() {
  modal.classList.toggle("show-modal");
}
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700
    && $(document).width() > 500) {
    document.getElementById("ScrollBack").style.display = "block";
  } else {
    document.getElementById("ScrollBack").style.display = "none";
  }
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
    $('#hiding').removeClass('button-clicked');
    $('#onend').addClass('button-clicked');

  }
}

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


trigger.addEventListener("click", toggleModal);
trigger1.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//
// $('#contactForm').submit(function () {
//   sendContactForm();

// });
// ScrollBack
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };



// When the user clicks on the button, scroll to the top of the document
//More
$("#more").click(function () {
  $("#hiddendiv").css("display", "block");
  $(this).css("display", "none");
  $(".recall-block-2.news").css("height", "100%");
  if ($(document).width() > 500)
    $('.contacts').css("margin-top", "20rem");// 40rem mobile
  else
    $('.contacts').css("margin-top", "40rem");// 40rem mobile

});