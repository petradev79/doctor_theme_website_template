$(document).ready(function() {

	// AOS ANIMATIONS
    AOS.init({
    	duration: 1000,
    	easing: 'ease-in-sine',
    });
});

// Navbar change color on scroll
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
});