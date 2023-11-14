/* rolling */
$('.rolling-rank').slick({
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

$('.rolling').css('display','flex');
$('.rolling-rank').css('width','180px');

$('.rolling-rank').mouseover (function() {
  $('.mouseover-front').css('display', 'block')
});

$('.rolling-rank').mouseout (function() {
  $('.mouseover-front').css('display', 'none')
});
//-------------------------------------------------

$('.today-box').slick ({
  slidersToShow: 1,
  slidersToScroll: 1,
  prevArrow: $('#prev-arrow'),
  nextArrow: $('#next-arrow'),
});

//-------------------------------------------------

var currentSlide = $('.today-box').slick('slickCurrentSlide');

if (currentSlide === 0) {
  $('#menu1').css({'color': '#46c5f0', 'font-weight': '600'});
  console.log('현재 컨텐츠는: '+currentSlide);
}

// 버튼 클릭 이벤트 핸들러
$('#prev-arrow').on('click', function() {
  var currentSlide = $('.today-box').slick('slickCurrentSlide');
  console.log('Current Slide:', currentSlide);

  if (currentSlide === 0) {
    $('#menu1').css({'color': '#46c5f0'});
    $('#menu2').css({'color': '#000'});
  } else if (currentSlide === 1) {
    $('#menu2').css({'color': '#46c5f0'});
    $('#menu3').css({'color': '#000'});
  } else if (currentSlide === 2) {
    $('#menu3').css({'color': '#46c5f0'});
    $('#menu4').css({'color': '#000'});
  } else if (currentSlide === 3) {
    $('#menu4').css({'color': '#46c5f0'});
    $('#menu5').css({'color': '#000'});
  } else if (currentSlide === 4) {
    $('#menu5').css({'color': '#46c5f0'});
    $('#menu6').css({'color': '#000'});
  } else if (currentSlide === 5) {
    $('#menu6').css({'color': '#46c5f0'});
    $('#menu7').css({'color': '#000'});
  } else if (currentSlide === 6) {
    $('#menu7').css({'color': '#46c5f0'});
    $('#menu1').css({'color': '#000'});
  } 
  

});

$('#next-arrow').on('click', function() {
  var currentSlide = $('.today-box').slick('slickCurrentSlide');
  console.log('Current Slide:', currentSlide);

  if (currentSlide === 0) {
    $('#menu1').css({'color': '#46c5f0',});
    $('#menu7').css({'color': '#000'});
  } else if (currentSlide === 1) {
    $('#menu2').css({'color': '#46c5f0'});
    $('#menu1').css({'color': '#000'});
  } else if (currentSlide === 2) {
    $('#menu3').css({'color': '#46c5f0'});
    $('#menu2').css({'color': '#000'});
  } else if (currentSlide === 3) {
    $('#menu4').css({'color': '#46c5f0'});
    $('#menu3').css({'color': '#000'});
  } else if (currentSlide === 4) {
    $('#menu5').css({'color': '#46c5f0'});
    $('#menu4').css({'color': '#000'});
  } else if (currentSlide === 5) {
    $('#menu6').css({'color': '#46c5f0'});
    $('#menu5').css({'color': '#000'});
  } else if (currentSlide === 6) {
    $('#menu7').css({'color': '#46c5f0'});
    $('#menu6').css({'color': '#000'});
  } 

});



