$(window).on('load', (function(){
	/*----------------MAIN TYPEWRITER EFFECT------------*/
	$(".intro").typeIt({
		strings: ['And that\'s all you need to know.'],
		speed: 70,
		lifeLike: true,
		breakDelay: 2000,
	})
	/*-------MAIN BTN------------*/
	var $btn = $('#btn');

	setTimeout(function(){
		$btn.fadeIn(1000)}, 3000);

	$btn.click(function() {
		$('html, body').animate({
			scrollTop: $(".contacts").eq(0).offset().top
		}, 1000);
	});

	/*-------------PORTFOLIO EFFECTS---------*/
	var $portfolio = $('.portfolio-item');

	$portfolio.mouseenter(function(){
		var $text = $(this).find('p');
		$text.fadeToggle(1000);
	})
	$portfolio.mouseleave(function(){
		var $text = $(this).find('p');
		$text.fadeToggle(1000);
	})
	/*----------SKILLS EFFECTS----------*/
	$(window).on('scroll', function(){
		var $wHeight = $(window).height();
		var $wTop = $(window).scrollTop();
		var $wBot = ($wHeight + $wTop);
		var $skills = $('.skills>.wrapper');
		var $skillsHeight = $skills.outerHeight();
		var $skillsTop = $skills.offset().top;
		var $skillsBot = ($skillsHeight + $skillsTop);

	// if (($skillsBot >= $wTop) && ($skillsTop <= $wBot)){
	// 	$('.skills-item').each(function(){
	// 		$(this).removeClass('skills-item-anim');
	// 	});
	// }
	// else {
	// 	$('.skills-item').each(function(){
	// 		$(this).addClass('skills-item-anim');
	// 	});
	// }
	if (($skillsBot >= $wTop) && ($skillsTop <= $wBot)){
		$('.skills-item').eq(0).removeClass('skills-item-anim');
		$('.skills-item').eq(1).removeClass('skills-item-anim');
		$('.skills-item').eq(2).removeClass('skills-item-anim');
	}
	else {
		$('.skills-item').eq(0).addClass('skills-item-anim');
		$('.skills-item').eq(1).addClass('skills-item-anim');
		$('.skills-item').eq(2).addClass('skills-item-anim');
	}
})
})
)
