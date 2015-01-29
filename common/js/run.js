//ja off
$(function(){
	$('.emergency').hide();
});


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

//画像切り替え
$(function(){
	$('.image img').each(function(){
		var imgsrc = $(this).attr('src');
		$(this).hover(function(){
			$(this).attr('src', imgsrc.replace(/^(.*)\.([a-zA-Z]+)$/, '$1_o.$2'));
		},
		function(){
			$(this).attr('src', imgsrc);
		});
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

//smoothscroll2
$(function(){
	$('.box').css({padding : '20px' , backgroundColor : '#ccc' , position : 'relative'});
	console.log('aaa',$('.box').scroll());
	
	$('.obebe').each(function(){
		$(this).on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop : 0},1000 , 'swing');
		$('.box').animate({bottom : '2800px'},999, 'linear');
		});
	});
});

//play
//$(function(){
//	$('.box').css({padding : '20px' , background : '#ccc', position : 'relative'})
//	.on('mouseover' , function(){
//		$(this).animate({
//			top : '100px'
//		},300);
//	});
//});

//高さ揃え
//$(function(){
//    $('.right').height($('.left').height());
//});

