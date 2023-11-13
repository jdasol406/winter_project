$('.test').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
//  autoplay: true,
//  autoplaySpeed: 1000
});

$('#mouseover').mouseover (function() {
  $('.mouseover-front').css('display', 'block')
});

$('#mouseover').mouseout (function() {
  $('.mouseover-front').css('display', 'none')
});