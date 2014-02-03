$(document).ready(function(){

	$(".speechBubble").addClass("is-speechBubble-collapsed");

	$(".shareStats").on("mouseenter", function(){
		$(this).find(".speechBubble").removeClass("is-speechBubble-collapsed");
	});

	$(".shareStats").on("mouseleave", function(){
		$(this).find(".speechBubble").addClass("is-speechBubble-collapsed");
	});
});