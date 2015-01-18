//current
$(function(){
	$('.g-nav li a').each(function(){
		if(location.href.match($(this).attr('href'))){
			$(this).addClass('current');
		}else{
			$(this).removeClass('current');
		}
	});
});


//toggle
$(function(){
	$('.toggleHook').addClass('is-close');
	$('.toggleHook + .toggleContent').css('display','none');
	
	
	$('.toggleHook').on('click',function(){
		if($(this).hasClass('is-close')){
			$(this).removeClass('is-close');
			$(this).next('.toggleContent').stop(true,true).slideDown('fast');
		}else{
			$(this).addClass('is-close');
			$(this).next('.toggleContent').stop(true,true).slideUp('fast');
		};
    });
});

//smoothScroll
$(function(){
	$('a[href^=#top]').click(function() {
		var href= $(this).attr("href");
		var target = $(href == "#top" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, 400, 'swing');
		return false;
	});
});


//$(function(){
//	$('a[href^=#]').on('click',function(){
//		$('html,body').animate({
//			scrollTop: $($(this).attr('href')).offset().top
//		}, 3000, 'swing');
//		return false;
//	});
//});