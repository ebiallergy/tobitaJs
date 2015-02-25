//ja off
$(function(){
	$('.emergency').hide();
});

//changeCss
$(function(){
	var body = $('body');
	$('.changeCss').on('click', function(){
		if(body.hasClass('ptn1')){
			body.removeClass('ptn1');
			body.addClass('default');
		} else if(body.hasClass('default')){
			body.removeClass('default');
			body.addClass('ptn1');
		} else {
			body.addClass('ptn1');
		}
	});
});

//tobiPop
$(function(){
	var pdiv = $('.tobiPop > a');
	pdiv.hide();

	setTimeout(function(){
		pdiv.fadeIn();
		$('.tobiPop').wrap('<div class="wrap">');
	},500);
	
	$('.close').click(function(){
		$('.wrap').fadeOut();
	});
	
	pdiv.click(function(event){
		event.preventDefault();
		pdiv.removeClass('popCurent');
		$(this).addClass('popCurent');
	});
	
//	$('.popCurent').on('click',function(event){
//		event.preventDefault();
//
//		$(this).removeClass('popCurent').fadeOut();
//		$(this).next('a').addClass('popCurent');
//		$('.popCurent').fadeIn();
//	});
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

//imageRollover
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

//tabs
$(function(){
	$('.tabAnchor li').first().addClass('active');
	var panelId = $('.tab-01 .active a').attr('href');
	$('.tabContents > div:not(' + panelId + ')').hide();
	console.log('href',panelId);
	$('.tabAnchor li a').on('click',function(event){
		event.preventDefault();
		$('.tab-01 li').removeClass('active');
		$('.tabContents > div').hide();
		$(this).parent('li').addClass('active');
		$($(this).attr('href')).show();
		console.log('obebe',$($(this).attr('href')));
	});
});

//addBlank
$(function(){
	$('.blank a').attr('target','_blank');
	$('a[href^=http]').not('[href*="location.hostname"]').attr('target','_blank');
	console.log('hostname', location.hostname);
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
	$('.box').css({position : 'relative'});
	$('.snake').css({position : 'absolute', top : '100px'}).hide();
	console.log('nini',$('.box').scroll());
	
	$('.obebe').each(function(){
		$(this).on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop : 0},1300 , 'swing');
		$('.box').animate({top : '-5000px'},2000, 'linear');
		$('.snake').show();
			
		setTimeout(function(){
			$('.box').css('top', '0')
		},2500);
		setTimeout(function(){
			$('.snake').hide();
		},2500);
			
		});
	});
});

//		if(b-has('ptn1')){
//			bRem('ptn1');
//			bAdd('default')
//		} else if(b-has('default')){
//			b-rem('default');
//		} else if(b-has('default')){
//			b-add('ptn1');
//		} else {
//			b-add('ptn1');
//		}
//		if($('body').hasClass('ptn1')){
//			$('body').removeClass('ptn1');
//			$('body').addClass('default')
//		} else if($('body').hasClass('default')){
//			$('body').addClass('ptn1');
//		} else {
//			$('body').addClass('ptn1');
//		}

//$(function(){
//	$('.ptn1').css({
//		background : '#000'
//	});
//});

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

