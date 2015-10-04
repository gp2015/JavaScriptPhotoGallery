// Stop middle button horizontal scroll
var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

$(document).ready(function(){
	
	// Previous button
	$(".left_arrow").click(function(){
		var currentImg = $(".focus");
		var prevImg = $(currentImg).prev();
		
		if (prevImg.length == 0){
			return;
		} else {
			$(".gallery").animate({marginLeft: "+=" + $(prevImg).outerWidth()}, 500);
			currentImg.removeClass("focus");
			prevImg.addClass("focus");
		}
	});
	
	// Next button
	$(".right_arrow").click(function(){
		var currentImg = $(".focus");
		var nextImg = $(currentImg).next();
		
		if (nextImg.length == 0){
			return;
		} else {
			$(".gallery").animate({marginLeft: "-=" + $(nextImg).outerWidth()}, 500);
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
			$(".gallery").animate({marginLeft: "+=" + currentImg.width()});
			currentImg.removeClass("focus");
			prevImg.addClass("focus");	
			
		}
    });	
	
	// Swipe left, "Next img"
    $(".slideshow").swipeleft(function() {
		var currentImg = $(".focus");
		var nextImg = $(currentImg).next();
		
		if (nextImg.length == 0){
			return;
		} else {
			$(".gallery").animate({marginLeft: "-=" + currentImg.width()});
			currentImg.removeClass("focus");
			nextImg.addClass("focus");						
		}		
    });
});

