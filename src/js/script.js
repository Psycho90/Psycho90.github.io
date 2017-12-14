$(".intro").typeIt({
	strings: ['And that\'s all you need to know.'],
	speed: 70,
	lifeLike: true,
	breakDelay: 2000,
})

var $btn = $('#btn');

setTimeout(function(){
	$btn.fadeIn(1000)}, 3000);

var $portfolio = $('.portfolio-item');

$portfolio.mouseenter(function(){
	var $text = $(this).find('p');
	$text.fadeToggle(1000);
})
$portfolio.mouseleave(function(){
	var $text = $(this).find('p');
	$text.fadeToggle(1000);
})

$(window).on('scroll', function(){
	var $wHeight = $(window).height();
	var $wTop = $(window).scrollTop();
	var $wBot = ($wHeight + $wTop);
	var $skills = $('.skills>.wrapper');
	var $skillsHeight = $skills.outerHeight();
	var $skillsTop = $skills.offset().top;
	var $skillsBot = ($skillsHeight + $skillsTop);
	console.log($skillsTop, $skillsBot)
	if(($skillsBot >= $wTop) && ($skillsTop <= $wBot)){
		$('.skills-item').addClass('skills-item-inView')
	}
	else{
		$('.skills-item').removeClass('skills-item-inView')
	}
})


