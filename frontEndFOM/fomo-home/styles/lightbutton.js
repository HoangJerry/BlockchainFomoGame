$(document).ready(function() {
	//light button
	$("#sendETHBackground > a").hover(function() {
		$(this).removeClass("shadow-animate-orange");
	}, function() {
		$(this).addClass("shadow-animate-orange");
	});
	$("#roundBotLeftBody > a").hover(function() {
		$(this).removeClass("shadow-animate-green");
	}, function() {
		$(this).addClass("shadow-animate-green");
	});
	$("#resultModal").hover(function() {
		$(this).removeClass("shadow-animate-green");
	}, function() {
		$(this).addClass("shadow-animate-green");
	});
	$(".contentBottom > div > div > h1").hover(function() {
		$(this).parent().removeClass("shadow-animate-pink");
	}, function() {
		$(this).parent().addClass("shadow-animate-pink");
	});
	$("#roll-btn").hover(function() {
		$(this).removeClass("shadow-animate-pink");
	}, function() {
		$(this).addClass("shadow-animate-pink");
	});
});