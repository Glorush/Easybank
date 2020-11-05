$(document).ready(function(){
	$('.toggle-menu').click(function(){
		$('.toggle-menu').toggleClass('active');
		$('.menu ul').slideToggle(1000);
	});
	// menu active
	$('body').scrollspy({ target: '#navbar' });

	// header animated
	$('.menu ul li a').click(function(){  
		$('html,body').animate({    
			scrollTop:$($(this).attr('href')).offset().top  
		},1000);
		return false;
	});


});
$(window).scroll(function() {
	var scrollvalue = $(this).scrollTop();

	if(scrollvalue>120){
		$('header').addClass('sticky');
	}else{
		$('header').removeClass('sticky');
		
	 return false;
	}
});