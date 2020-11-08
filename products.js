$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 variableWidth: true,
 arrows: false,
 initialSlide: 1,
 mobileFirst: true,
 // fade: true,
 asNavFor: '.slider-nav',


});

$('.slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: true,
 initialSlide: 1,
 mobileFirst: true,
 centerMode: true,
 focusOnSelect: true,

});
