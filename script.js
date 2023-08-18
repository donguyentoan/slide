$(document).ready(function(){
    $('.slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots:$(".custom-slick-dots"),
        Accessibility: true,
    });

    $('.custom-slick-arrow-1').on('click', function () {
		$('.slick').slick('slickGoTo', 1);
	});
    $('.custom-slick-arrow-2').on('click', function () {
		$('.slick').slick('slickGoTo', 2);
	});
    $('.custom-slick-arrow-3').on('click', function () {
		$('.slick').slick('slickGoTo', 3);
	});
  });