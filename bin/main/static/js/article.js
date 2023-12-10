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
      
      if($('#daum').length === 0){
        var imageElement = $('<img>', {
          id: 'daum',
          src: '/img/article/daum-favicon.png',
          style: 'width: 22px; border-radius: 5px; margin: 8px auto'
        });
        const dynamicDiv = $('<div>').append(imageElement);
  
        $('#adddiv').append(dynamicDiv);
      } else {
        alert('이미 존재하는 항목입니다.');
      }
   } else if (inputValue==="apple"){
      console.log("apple");
      
      if($('#apple').length === 0){
        var imageElement = $('<img>', {
          id: 'apple',
          src: '/img/article/apple-favicon.jpeg',
          style: 'width: 22px; border-radius: 5px; margin: 8px auto'
        });
        const dynamicDiv = $('<div>').append(imageElement);
  
        $('#adddiv').append(dynamicDiv);
      } else {
        alert('이미 존재하는 항목입니다.');
      }
   } else if(inputValue==="papago"){
      console.log("papago");
      
      if($('#papago').length === 0){
        var imageElement = $('<img>', {
          id: 'papago',
          src: '/img/article/papago-favicon.png',
          style: 'width: 22px; border-radius: 5px; margin: 8px auto'
        });
        const dynamicDiv = $('<div>').append(imageElement);
  
        $('#adddiv').append(dynamicDiv);
      } else {
        alert('이미 존재하는 항목입니다.');
      }
   }
   
});


//$(document).on('contextmenu', '#daum', function(e) {
//  $('#daum').attr('src', '/img/article/x-icon.png');
//  $('#daum').attr('id', 'imgx'); 
//  
//  $('#imgx').on('click',function(){
//    console.log("x");
//    $('#imgx').remove();
//  });
//});
//
//$(document).on('contextmenu', '#apple', function(e) {
//  $('#apple').attr('src', '/img/article/x-icon.png');
//  $('#apple').attr('id', 'imgx'); 
//  
//  $('#imgx').on('click',function(){
//    console.log("x");
//    $('#imgx').remove();
//  });
//});
//
//$(document).on('contextmenu', '#papago', function(e) {
//  $('#papago').attr('src', '/img/article/x-icon.png');
//  $('#papago').attr('id', 'imgx'); 
//  
//  $('#imgx').on('click',function(){
//    console.log("x");
//    $('#imgx').remove();
//  });
//});

function ximg(e){
  $(e).attr('src', '/img/article/x-icon.png');
  $(e).attr('id', 'imgx'); 
  
  $('#imgx').on('click',function(){
    console.log("x");
    $('#imgx').remove();
  });
}

$(document).on('contextmenu', '#daum', function() {
  ximg(this);
});

$(document).on('contextmenu', '#apple', function() {
  ximg(this);
});

$(document).on('contextmenu', '#papago', function() {
  ximg(this);
});

// x이미지를 다시 원래대로...?


