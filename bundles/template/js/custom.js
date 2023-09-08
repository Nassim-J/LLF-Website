// JavaScript Document
jQuery(function($){
	
	
		    
});
jQuery(document).ready(function($) {
	
	//Thumb Hover Effect
	$('.bar2').mosaic({
		animation	:	'slide'		//fade or slide
	});
								
	$(".searchIcon").click(function() {
		$(".clm-dropdownform").toggleClass('show');
	});
	
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass('openmenu');
	});
	
	/*$(".banner-slider").slick({
		dots: true,
		infinite: true,
		rtl:true,
		prevArrow :'<span class="slick-prev">Previous</span>',
		nextArrow :'<span class="slick-next">Next</span>'
	});*/
	
	$(window).scroll(function() {
		if ($(window).width() > 1024) {
			if ($(this).scrollTop() > 1){  
				$('.header-container').addClass("sticky");
				$('.header-container').removeClass("nonsticky");
				$('.nonstickylogo').fadeOut(0);
				$('.stickylogo').fadeIn(250);
				 //$(".topleft-sidebar").css({'height':($(".topleft-sidebar-inner").height()+'px')});
				 //$(".mod-weather").fadeOut(250);
			  }
			  else{
				$('.header-container').removeClass("sticky");
				$('.header-container').addClass("nonsticky");
				$('.nonstickylogo').fadeIn(250);
				$('.stickylogo').fadeOut(0);
				//$(".mod-weather").fadeIn(1500);
			  }
		}
	});
	
	// Reset Font Size
	  var originalFontSize = $('.col-main').css('font-size');
	  $(".resetFont").click(function(){
	  $('.col-main').css('font-size', originalFontSize);
	  return false;
	  });
	  // Increase Font Size
	  $(".increaseFont").click(function(){
		var currentFontSize = $('.col-main').css('font-size');
		var currentFontSizeNum = parseFloat(currentFontSize, 10);
		var newFontSize = currentFontSizeNum*1.2;
		$('.col-main').css('font-size', newFontSize);
		return false;
	  });
	  // Decrease Font Size
	  $(".decreaseFont").click(function(){
		var currentFontSize = $('.col-main').css('font-size');
		var currentFontSizeNum = parseFloat(currentFontSize, 10);
		var newFontSize = currentFontSizeNum*0.8;
		$('.col-main').css('font-size', newFontSize);
		return false;
	  });
	  
	  $(".btn-close").click(function(){
			$(".sticky-container").toggleClass("stickyhide");
		});
	  
	  //simple weather js
	  $.simpleWeather({
		location: 'Beirut, Lebanon',
		woeid: '',
		unit: 'c',
		success: function(weather) {
		  html = '<i class="icon-'+weather.code+'"></i><b>'+weather.temp+'<sup>0</sup></b><small>'+weather.city+'</small>';
		  //html += '<span class="md2"><p class="loc"><strong>'+weather.forecast[1].date+'</strong></p><p class="time">9:30 am</p></span>';
		  //html += '<li class="currently">'+weather.currently+'</li>';
		  //html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
	  
		  $(".weather").html(html);
		},
		error: function(error) {
		  $(".weather").html('<p>'+error+'</p>');
		}
	  });
			
			
	  
	 
	 /* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  //equalheight('#itemListPrimary .block-newsinner');
});


$(window).resize(function(){
  //equalheight('#itemListPrimary .block-newsinner');
});
 
});