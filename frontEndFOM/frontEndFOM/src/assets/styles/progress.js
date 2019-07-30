$(document).ready(function() {
	let maxValue = 200;
	let currentValue = 134;
	$(".ctn-body-from .progress .progress-bar").attr("aria-valuemax",maxValue);
	$(".ctn-body-from .progress .progress-bar").attr("aria-valuenow",currentValue);
	$(".ctn-body-from span").text(""+currentValue+"/"+maxValue);
	$(".ctn-body-from .progress .progress-bar").css("width",""+currentValue/maxValue*100+"%");
});