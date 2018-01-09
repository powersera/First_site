

										/* To One*/
$(window).scroll(function () {
	
if ($(window).scrollTop()> '150') {
$('.toOne').animate({
	opacity: 1,
	width: 50 + '%', 
    top: 10	
},3000,'easeOutBounce'),
$('.color1').animate ({
	opacity: 1,
	left: 50.6 + '%'
},3000, 'easeOutBounce')

}
})


                                                 /* To Two*/
$(window).scroll(function () {
	
if ($(window).scrollTop()> '400') {
	$('.toTwo').animate({
	opacity: 1,
	width: 50 + '%',
	top:92,
	left:63 + '%'
},3000,'easeOutBounce'),

$('.color2').animate({
	opacity: 1,
	left:60.6 +'%'
},3000,'easeOutBounce')
}
})


                                                 /* To Three*/
	
$(window).scroll(function () {
if ($(window).scrollTop()> '600') {
	$('.toThree').animate({
	opacity: 1,
	width: 50 + '%' ,          
},2000, 'easeInBounce'), 
$('.color3').animate ({
	opacity:1,
	left:50.6 + '%'
	
	
},2000, 'easeInBounce')
}
})
                                                     /*  ROUND ONE*/



$(window).scroll(function () {
	
if ($(window).scrollTop()> '200') {
	$('.one').animate({
	opacity: 1,
	
},2000);
}
})
 
                                                       /*  ROUND Two*/

$(window).scroll(function () {
	
if ($(window).scrollTop()> '400') {
	$('.two').animate({
	opacity: 1,
	top:80
	
},2000);
}
})
 
                                                        /*  ROUND Three*/
$(window).scroll(function () {
	
if ($(window).scrollTop()> '600') {
	$('.three').animate({
	opacity: 1,
	top:140
	
	
},2000)
}
})












