

$(window).scroll(function () {
	if ($(window).scrollTop >'100') {
		$('#box').animate ({
			width: 50 + '%',
			top: 50 + '%',
			left: 50 + '%'
			
		},3000)
		
		
		
	}
	
})