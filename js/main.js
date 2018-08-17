$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();
	
	$('.collapse').collapse();

	// ---- Slider
    $('#header').vegas({
		overlay: true,
		transition: 'fade', 
		transitionDuration: 4000,
		delay: 10000,
		color: 'black',
		animation: 'random',
		animationDuration: 20000,
		slides: [
		{ src: './image/slider/slider-1.jpg' },
		{ src: './image/slider/slider-2.jpg' },
		{ src: './image/slider/slider-3.jpg' },
		{ src: './image/slider/slider-4.jpg' }
		]
	});

    //---- Date Picker 
    $( "#datepicker" ).datepicker();

	//---- Testimonial
    $(".owl-carousel").owlCarousel({
    	items: 1,
    	autoplay: true,
    	loop:true
    });

	// Check the initial Poistion of the Sticky Header
	var stickyHeaderTop = $('#stickyheader').offset().top;
	$(window).scroll(function(){
	    if( $(window).scrollTop() > 100 ) {
	        $('#stickyheader').css({position: 'fixed', top: '0px'});
	        $('#stickyalias').css('display', 'block');
	        $('#stickyheader').addClass('fix-top');
	        $('.logo img').css('border','1.5px solid #ccc');
	        $('.main-menu ul li ul').css('background','rgb(250,194,0)');
	        $('.main-menu ul li ul li a').css('border-bottom','1px solid rgb(194,139,16)');
	    } else {
	        $('#stickyheader').css({position: 'absolute', top: '0px'});
	        $('#stickyalias').css('display', 'none');
	        $('#stickyheader').removeClass('fix-top');
	        $('.logo img').css('border','1.5px solid #c28b10');
	        $('.main-menu ul li ul').css('background','rgba(0,0,0,.55)');
	        $('.main-menu ul li ul li a').css('border-bottom','1px solid #4e4d4d');
	    }
	});

	// ---- Menu Smoth Scroll
	$('.somthscroll a[href*="#"]:not([href="#"])').on("click" , function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
		      $('html, body').animate({
		          scrollTop: target.offset().top
		      }, 1000);
		      return false;
		  }
		}
	});
	
	// ---- Scroll To Top
	function scrollToTop($topClass){   
	    var top_0 = {scrollTop:0};
	    var topClass = $($topClass);
	    topClass.on("click" , function(e){
	        $("html,body").animate(top_0,1500);

	        return false;
	    });
	    $(window).scroll(function(){
	        if($(this).scrollTop() > 400) {
	            topClass.fadeIn(500);
	        }
	        else {
	            topClass.fadeOut(500);
	        }
	    });
	}
	scrollToTop('.scrolltotop a img');


	/***
	   Preloader
	***/
	$('body').addClass('preloader-active');

	$(window).on('load', function() { 
	  $('.preloader').fadeOut();
	  $('.preloader-spinner').delay(350).fadeOut('slow');
	  $('body').removeClass('preloader-active');
	});

	// ---- Responsive Menu
	$('#menu').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce",
		prependTo: '#stickyheader'
	});

	// Counter
	$('.counter').counterUp({
	    delay: 10,
	    time: 2000
	});
})(jQuery);