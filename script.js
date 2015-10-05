$(document).ready(function(){
	// Previous button
	$("#left_arrow").click(function(){
		var currentImg = $(".focus");
		var prevImg = $(currentImg).prev();
		if (prevImg.length == 0) {						return;		} 				if ($(currentImg).is(":first-child")) {						$(".gallery").css("margin-left", "0");			return;					} else {
			$(".gallery").animate({marginLeft: "+=" + $(prevImg).width()}, 500);
			currentImg.removeClass("focus");
			prevImg.addClass("focus");
		}		
	});
	// Next button
	$("#right_arrow").click(function(){
		var currentImg = $(".focus");
		var nextImg = $(currentImg).next();				if (nextImg.length == 0) {			return;		}		
		if ($(nextImg).is(":last-child")) {						$(".gallery").animate({marginLeft: "-6870"}, 500);			currentImg.removeClass("focus");			nextImg.addClass("focus");			return;					} else {
			$(".gallery").animate({marginLeft: "-=" + $(currentImg).width()}, 500);
			currentImg.removeClass("focus");
			nextImg.addClass("focus");
		}		
	});
	// Swipe events
	// Swipe right, "Prev img"
    $(".slideshow").swiperight(function() {
		var currentImg = $(".focus");
		var prevImg = $(currentImg).prev();
		if (prevImg.length == 0){
			return;
		} else {
			$(".gallery").css({marginLeft: "+=" + $(prevImg).width()});
			currentImg.removeClass("focus");
			prevImg.addClass("focus");			}
    });	
	// Swipe left, "Next img"
    $(".slideshow").swipeleft(function() {
		var currentImg = $(".focus");
		var nextImg = $(currentImg).next();
		if (nextImg.length == 0){
			return;
		} else {
			$(".gallery").css({marginLeft: "-=" + $(currentImg).width()});
			currentImg.removeClass("focus");
			nextImg.addClass("focus");						
		}
    });
});