$(document).ready(function(){
	"use strict";

	// MixItUp
	var mixer = mixitup('.clinic-inside-main');

	// POPup
	$('.image-link').magnificPopup({type:'image',});

	/***
        Video Area
    ***/
    $('.main-vedio').magnificPopup({
        type: 'iframe',

        iframe: {
            patterns: {
              vimeo: {

                index: 'vimeo.com',

                id:'https://vimeo.com/54298665',

                src: 'https://player.vimeo.com/video/108669033'

              }
            }
        }
    });
});