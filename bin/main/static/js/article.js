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
  $('.popup input[type="text"]').val('');
}); 


function siteCheckHandler() {
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
  
        $('#adddiv').prepend(dynamicDiv);
      } else {
        alert('이미 존재하는 항목입니다.');
      }
   } else if (inputValue==="apple"){
      console.log("apple");
      
      if($('#apple').length === 0){
        var imageElement = $('<img>', {
          id: 'apple',
          src: '/img/article/apple-favicon.png',
          style: 'width: 20px; height: 20px; border-radius: 5px; margin: 8px auto'
        });
        const dynamicDiv = $('<div>').append(imageElement);
  
        $('#adddiv').prepend(dynamicDiv);
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
  
        $('#adddiv').prepend(dynamicDiv);
      } else {
        alert('이미 존재하는 항목입니다.');
      }
   }
   $('.popup').css('display','none');
   $('.popup input[type="text"]').val('');
}

//아직 이미지 변경하면서 하나 더 생기는 오류 못고침
$('#site-check').on('click', siteCheckHandler);

function replaceImage(src, newId) {
  $('#imgx').attr('src', src).attr('id', newId);
}

function imgback(src, newId) {
  $('#imgx').attr('src', src).attr('id', newId);
}

function ximg(e){
  $(e).attr('src', '/img/article/x-icon.png');
  $(e).attr('id', 'imgx'); 
  
  $('#imgx').on('click',function(){
    console.log("x");
    $('#imgx').remove();
    $('.popup').css('display','none');
  });
}

$(document).on('contextmenu', '#daum', function() {
  ximg(this);

  $('.popup').css('display','block');
  
  $('#site-cancel').on('click', function() {
    console.log('site-check: daum');
    imgback('/img/article/'+ 'daum' + '-favicon.png','daum');
//    $('#imgx').attr('src', '/img/article/daum-favicon.png');
//    $('#imgx').attr('id', 'daum');
  });
  
  $('#site-update').on('click', function() {
    var newText = $('.popup input').val();
    
     if($('#'+newText).length !== 0) {
        alert('이미 존재하는 항목입니다.');
      }
      
    replaceImage('/img/article/' + newText + '-favicon.png',newText);
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
  });
});

$(document).on('contextmenu', '#apple', function() {
  ximg(this);

  $('.popup').css('display','block');
  

  $('#site-cancel').on('click', function() {
    console.log('site-check: daum');
    imgback('/img/article/'+ 'apple' + '-favicon.png','apple');
  });
  
  $('#site-update').on('click', function() {
    var newText = $('.popup input').val();
    
    if($('#'+newText).length !== 0) {
        alert('이미 존재하는 항목입니다.');
      }
    replaceImage('/img/article/' + newText + '-favicon.png',newText);
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
  });
});

$(document).on('contextmenu', '#papago', function() {
  ximg(this);

  $('.popup').css('display','block');
  
  $('#site-cancel').on('click', function() {
    console.log('site-check: daum');
    imgback('/img/article/'+ 'papago' + '-favicon.png','papago');
  });
  
  $('#site-update').on('click', function() {
    var newText = $('.popup input').val();

    if($('#'+newText).length !== 0) {
        alert('이미 존재하는 항목입니다.');
    }

    replaceImage('/img/article/' + newText + '-favicon.png',newText);
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
  });
});


