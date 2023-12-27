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

/* fixed menu script */
$('#plus').on('click',function(){
  $('.popup input[type="text"]').val('');
  $('.popup').find('#site-check').show();
  $('.popup').css('display','block');
}); 


$('#site-cancel').on('click',function(){
  $('.popup').css('display','none');
  $('.popup input[type="text"]').val('');
}); 

var sharpIcon = ['#daum','#apple','#papago'];

for(let i=0; i<sharpIcon.length; i++){
  console.log(sharpIcon[i]);
}

var icon = ['daum','apple','papago'];

for(let i=0; i<icon.length; i++){
  console.log(icon[i]);
}

// 새로운 아이콘을 생성하는 함수
function siteCheckHandler() {
  var inputValue = $('#site-name').val();
  //indexOf() 함수로 icon배열에서 inputValue의 인덱스를 찾음
  var iconIndex = icon.indexOf(inputValue);

  if (iconIndex !== -1) { // 배열에서 찾는 요소가 없으면 -1을 반환함
    var sharpIconId = sharpIcon[iconIndex];

    if ($(sharpIconId).length === 0) {
      var imageElement = $('<img>', {
        id: icon[iconIndex],
        src: '/img/article/' + icon[iconIndex] + '-favicon.png',
        style: 'width: 22px; border-radius: 5px; margin: 8px auto'
      });
      const dynamicDiv = $('<div>').append(imageElement);

      $('#adddiv').prepend(dynamicDiv);
    } else {
      alert('이미 존재하는 항목입니다.');
    }
  } else {
    alert('생성할 수 없는 사이트입니다.');
  }
 
   $('.popup').css('display','none');
   $('.popup input[type="text"]').val('');
}

// 생성함수 호출
$('#site-check').on('click', siteCheckHandler);


// 아이콘 이미지, 아이디 변경 함수
function replaceImage(src, newId) {
  $('.imgx').attr('src', src).attr('id', newId);
  $('.imgx').removeClass('imgx');
}

// 원래 이미지로 돌리는 함수
function imgback(src, newId) {
  $('.imgx').attr('src', src).attr('id', newId);
  $('.imgx').removeClass('imgx');
}

// x이미지 눌렀을 때 아이콘 없애는 함수
function ximg(e){
  $(e).attr('src', '/img/article/x-icon.png');
  $(e).addClass('imgx'); 
  
  $('.imgx').on('click',function(){
    $('.imgx').remove();
    $('.popup').css('display','none');
  });
}

// 수정 팝업 열리는 함수
function updatePopupOpen(event) {
  var elementId = event.target.id;
  
  $('.popup input#site-name').val(elementId);  
  $('.popup').find('#site-check').hide();
  $('.popup').css('display','block');
}

// 팝업 취소 버튼 눌렀을 때 함수
function cancelBtn(event){ //못씀
  var elementId = event.target.id;
  
  imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    $('.popup').css('display','none');
}

// 팝업 업데이트 버튼 눌렀을 때 함수
function updateBtn(event){
  var elementId = event.target.id;
  var newText = $('.popup input').val();

    if($('#'+newText).length === 0) {
      replaceImage('/img/article/' + newText + '-favicon.png',newText);
    } else {
      alert('이미 존재하는 항목입니다.');
      imgback('/img/article/'+ elementId + '-favicon.png', elementId);
    }
    $('.popup').css('display','none');
    $('.popup input[type="text"]').val('');
}

/* ------------------------------------------------------ */

// 아이콘 수정부분 스크립트
for (var i = 0; i < icon.length; i++) {
  $(document).on('contextmenu', '#' + icon[i], function (event) {
    var elementId = event.target.id;
    
    ximg(this);

    // 생성버튼이 사라진 수정팝업 오픈
    updatePopupOpen(event);

    $('#site-cancel').off('click').on('click', function () {
      imgback('/img/article/' + elementId + '-favicon.png', elementId);
      $('.popup').css('display', 'none');
    });

  $('#site-cancel').on('click', function () {
    cancelBtn(event);
  });

    $('#site-update').off('click').on('click', function () {
      updateBtn(event);
    });
  });
}

/* fixed menu script end */

