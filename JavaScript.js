
function fun() {
	console.log($(document).scrollTop())
	
	
}

$(window).scroll(function(){
	var top =  $(document).scrollTop();

if (top>250){
	$('#menu').addClass('active')
}
else {
	$('#menu').removeClass('active')
	
}
	
	
	
})
