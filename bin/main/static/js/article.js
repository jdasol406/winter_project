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

/* container */

$('#plus').on('click',function(){
  $('.popup').css('display','block');
}); 


$('#site-cancel').on('click',function(){
  $('.popup').css('display','none');
}); 

// 스크립트로 html만들고 마지막요소에 붙이는 함수
$('#site-check').on('click', function() {
  var inputValue = $('#site-name').val();
  console.log("test : "+inputValue);
    if(inputValue==="daum"){
      console.log("daum");
      var imageElement = $('<img>', {
        src: '/img/article/daum-favicon.png',
        style: 'width: 22px; border-radius: 5px; margin: 8px auto'
      });
      const dynamicDiv = $('<div>').append(imageElement);

      $('#adddiv').append(dynamicDiv);
    } else if(inputValue==="apple"){
       console.log("apple");
      var imageElement = $('<img>', {
        src: '/img/article/apple-favicon.jpeg',
        style: 'width: 22px; border-radius: 5px; margin: 8px auto'
      });
      const dynamicDiv = $('<div>').append(imageElement);

      $('#adddiv').append(dynamicDiv);
    } else if(inputValue==="papago"){
       console.log("papago");
      var imageElement = $('<img>', {
        src: '/img/article/papago-favicon.png',
        style: 'width: 22px; border-radius: 5px; margin: 8px auto'
      });
      const dynamicDiv = $('<div>').append(imageElement);

      $('#adddiv').append(dynamicDiv);
    }



    });
