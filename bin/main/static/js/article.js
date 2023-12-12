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

$('#site-cancel2').on('click',function(){
  $('.popup2').css('display','none');
  $('.popup2 input[type="text"]').val('');
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
  
        $('#adddiv').append(dynamicDiv);
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
   $('.popup').css('display','none');
   $('.popup input[type="text"]').val('');
}

//아직 이미지 변경하면서 하나 더 생기는 오류 못고침
$('#site-check').on('click', siteCheckHandler);

function replaceImage(id, src, newId) {
  $('#' + id).attr('src', src).attr('id', newId);
}

function ximg(e){
  $(e).attr('src', '/img/article/x-icon.png');
  $(e).attr('id', 'imgx'); 
  
  $('#imgx').on('click',function(){
    console.log("x");
    $('#imgx').remove();
  });
}

function imgback(element) {
  $('#imgx').attr('src', '/img/article/'+element+'-favicon.png');
  $('#imgx').attr('id', element);
  console.log("imgback: "+element);
}

$(document).on('contextmenu', '#daum', function() {
  ximg(this);

  $('.popup2').css('display','block');
  
  $(document).on('click', function() {
    imgback('daum');
  });
  
  $('#update-btn').on('click', function() {
    var newText = $('.popup2 input').val();
    console.log(newText);
    replaceImage('daum', '/img/article/' + newText + '-favicon.png',newText);
    $('.popup2').css('display','none');
    $('.popup2 input[type="text"]').val('');
  });
});

$(document).on('contextmenu', '#apple', function() {
  ximg(this);

  $('.popup2').css('display','block');
  

  $(document).on('click', function() {
    imgback('apple');
  });
  
  $('#update-btn').on('click', function() {
    var newText = $('.popup2 input').val();
    console.log(newText);
    replaceImage('apple', '/img/article/' + newText + '-favicon.png',newText);
    $('.popup2').css('display','none');
    $('.popup2 input[type="text"]').val('');
  });
});

$(document).on('contextmenu', '#papago', function() {
  ximg(this);

  $('.popup2').css('display','block');
  
  $(document).on('click', function() {
    imgback('papago');
  });
  
  $('#update-btn').on('click', function() {
    var newText = $('.popup2 input').val();
    console.log(newText);
    replaceImage('papago', '/img/article/' + newText + '-favicon.png',newText);
    $('.popup2').css('display','none');
    $('.popup2 input[type="text"]').val('');
  });
});


