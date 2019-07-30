$(document).ready(function() {

	var rollString = $("#roll-under-btn").text();
	var rangeValue = $("#input-ranger").val();
	var under = true;

	var luckyNumber = 3;
	var currentLuckyNumber = 95;

	$("#roll-under-btn").click(function() {
		under = true;
		rollString = $(this).text();
		$("#roll-direct-btn button").removeClass("active");
		$(this).addClass("active");
		showRollButton(rollString, rangeValue);
	});
	$("#roll-over-btn").click(function() {
		under = false;
		rollString = $(this).text();	
		$("#roll-direct-btn button").removeClass("active");
		$(this).addClass("active");
		showRollButton(rollString, rangeValue);
	});

	$("#roll-btn").click(function() {
		rollLuckyNumber(currentLuckyNumber, luckyNumber);
		
	});
	
	function rollLuckyNumber(current, next) {

		var temp = current;
		var interval;
		$("#roll-game-header div:last-child p").attr("id", "textbanner");
		$('#textbanner').textbanner();

		interval = setInterval(function() {
			temp++;
			if (temp > 99) {
				temp = 0;
			}
			$("#roll-game-header div:last-child h1").text(temp);
			if (under == true) {
				if (temp > rangeValue) {
					$("#roll-game-header div:last-child h1").css("color","#ff5454");
				}
				else {
					$("#roll-game-header div:last-child h1").css("color","#2ee2ba");
				}
			}
			if (under == false) {
				if (temp >= rangeValue) {
					$("#roll-game-header div:last-child h1").css("color","#2ee2ba");
				}
				else {
					$("#roll-game-header div:last-child h1").css("color","#ff5454");
				}
			}
			
			if (temp == next) {
				$("#roll-game-header div:last-child p").removeAttr("id");
				$("#roll-game-header div:last-child p").empty();
				$("#roll-game-header div:last-child p").text("Lucky Number");
				clearInterval(interval);
			}
		},1000);
	}

	function showRollButton(rollString, rangeValue) {
		$("#roll-btn").text(rollString+ " "+ rangeValue);
	}

	function valueOutput(element) { 
		rangeValue = element.val(); 
		// $("#js-output").html(rangeValue); 
		
		var rangeWidth = $(".rangeslider").width();
		if(under == true)
		{
			if(rangeValue >= 95)
			{
				rangeValue = 95;
				$(".rangeslider__fill").css({"width":0.92*rangeWidth});
				$(".rangeslider__handle").css({"left":0.92*rangeWidth-20});
			}
		}
		else
		{
			if(rangeValue >= 98)
			{
				rangeValue = 98;
				$(".rangeslider__fill").css({"width":0.94*rangeWidth});
				$(".rangeslider__handle").css({"left":0.94*rangeWidth-20});
			}
			if(rangeValue <= 4)
			{
				rangeValue = 4;
				$(".rangeslider__fill").css({"width":0.08*rangeWidth});
				$(".rangeslider__handle").css({"left":0.08*rangeWidth-20});
			}
		}
		$(".rangeslider__handle").html("<span style='display: block; padding: 5px; font-weight: bold; font-size: 20px; text-align: center;'>"+rangeValue+"</span>");
		$("#roll-game-header div:first-child h1").text(rangeValue);
		showRollButton(rollString, rangeValue);
	}

	/** * Initialize the elements */ 
	$("#input-ranger").rangeslider({ 
		polyfill: false,

		onInit: function() {
			valueOutput($("#input-ranger")); 
		},

		// Callback function
		onSlide: function(position, value) {
			valueOutput($("#input-ranger")); 
		},

		// Callback function
		onSlideEnd: function(position, value) {
			valueOutput($("#input-ranger")); 
		}
	}); 
});