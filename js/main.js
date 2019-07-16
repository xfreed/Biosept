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
			return false;
		}
	});
	return false;
});
$('#mdlbtn').click(function () {
	var _name = $('#form_name_modal').val();
	var _phone = $('#form_phone_modal').val();
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
			return false;
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
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700 &&
		$(document).width() > 500) {
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
	} else {
		$('.top-menu').removeClass('fixed');
	}
})
// Modal

var modal = document.querySelector(".modal");
var nodes = document.querySelectorAll('.trigger');
var trigger = nodes[0];
var trigger1 = nodes[1];
var trigger2 = nodes[2];
var closeButton = document.querySelector(".close-button");


trigger.addEventListener("click", toggleModal);
trigger1.addEventListener("click", toggleModal);
trigger2.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
window.onscroll = function () {
	scrollFunction()
};


$("#more").click(function () {
	$("#hiddendiv").css("display", "block");
	$(this).css("display", "none");
	$(".recall-block-2.news").css("height", "100%");
	if ($(document).width() > 500)
		$('.contacts').css("margin-top", "20rem"); // 40rem mobile
	else
		$('.contacts').css("margin-top", "40rem"); // 40rem mobile
});
$("#fn1").click(function (){
	dropclass();
	$("#header-image").addClass('sub1');
	$(this).addClass('active');
});
$("#fn2").click(function (){
	dropclass();
	$("#header-image").addClass('sub2');
	$(this).addClass('active');

});
$("#fn3").click(function (){
	dropclass();
	$("#header-image").addClass('sub3');
	$(this).addClass('active');

});
function dropclass(){
	$("#header-image").removeClass('sub1');	
	$("#header-image").removeClass('sub2');	
	$("#header-image").removeClass('sub3');	
	$("#fn1").removeClass('active');	
	$("#fn2").removeClass('active');	
	$("#fn3").removeClass('active');	
}