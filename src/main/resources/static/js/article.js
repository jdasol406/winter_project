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
  $('.popup').find('#site-check').show();
  $('.popup').css('display','block');
}); 


$('#site-cancel').on('click',function(){
  $('.popup').css('display','none');
  $('.popup input[type="text"]').val('');
}); 


function siteCheckHandler() {
  var inputValue = $('#site-name').val();
  
    if(inputValue==="daum"){
            
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
   } else {
     alert("생성할 수 없는 사이트입니다.");
   }
   $('.popup').css('display','none');
   $('.popup input[type="text"]').val('');
}

$('#site-check').on('click', siteCheckHandler);

function replaceImage(src, newId) {
  $('.imgx').attr('src', src).attr('id', newId);
  $('.imgx').removeClass('imgx');
}

function imgback(src, newId) {
  $('.imgx').attr('src', src).attr('id', newId);
  $('.imgx').removeClass('imgx');
}

function ximg(e){
  $(e).attr('src', '/img/article/x-icon.png');
  $(e).addClass('imgx'); 
  
  $('.imgx').on('click',function(){
    $('.imgx').remove();
    $('.popup').css('display','none');
  });
}

$(document).on('contextmenu', '#daum', function(event) {
  var elementId = event.target.id;
  ximg(this);

  $('.popup input#site-name').val(elementId);  
  $('.popup').find('#site-check').hide();
  $('.popup').css('display','block');
  
  $('#site-cancel').off('click').on('click', function() {
    imgback('/img/article/'+ elementId + '-favicon.png', elementId);
  });
  
  $('#site-cancel').on('click', function() {
    imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    $('.popup').css('display','none');
  });
  
  $('#site-update').on('click', function() {
    var newText = $('.popup input').val();
    
     if($('#'+newText).length === 0) {
      replaceImage('/img/article/' + newText + '-favicon.png',newText);
      } else {
        alert('이미 존재하는 항목입니다.');
        imgback('/img/article/'+ elementId + '-favicon.png', elementId);
      }
      
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
  });
});

$(document).on('contextmenu', '#apple', function(event) {
  var elementId = event.target.id;
  ximg(this);
  
  $('.popup input#site-name').val(elementId);
  $('.popup').find('#site-check').hide();
  $('.popup').css('display','block');
  
  $('#site-cancel').off('click').on('click', function() {
    imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    $('.popup').css('display','none');
  });
  

  $('#site-cancel').on('click', function() {
    imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    $('.popup').css('display','none');
  });
  
  $('#site-update').on('click', function() {
    var newText = $('.popup input').val();
    
    if($('#'+newText).length === 0) {
      replaceImage('/img/article/' + newText + '-favicon.png',newText);
    } else {
      alert('이미 존재하는 항목입니다.');
      imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    }
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
  });
});

$(document).on('contextmenu', '#papago', function(event) {
  var elementId = event.target.id;
  
  ximg(this);
  
  $('.popup input#site-name').val(elementId);
  $('.popup').find('#site-check').hide();
  $('.popup').css('display','block');
  
  $('#site-cancel').off('click').on('click', function() {
    imgback('/img/article/'+ elementId + '-favicon.png', elementId);
  });
  
  $('#site-cancel').on('click', function() {
    imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    $('.popup').css('display','none');
  });
  
  $('#site-update').on('click', function() {
    var newText = $('.popup input').val();

    if($('#'+newText).length === 0) {
      replaceImage('/img/article/' + newText + '-favicon.png',newText);
    } else {
      alert('이미 존재하는 항목입니다.');
      imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    }
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
  });
});


