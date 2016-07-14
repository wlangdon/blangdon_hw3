$(document).ready(function() {
	$('#pics2').hover(function() {
		$("#pics").slideDown(3000);
		$("#pics2").slideUp(3000);
		$("#footer").fadeIn(5000);
	})
})
$(document).ready(function() {
	$('#header').click(function() {
		$("#header").fadeOut(1000);
	})
})
