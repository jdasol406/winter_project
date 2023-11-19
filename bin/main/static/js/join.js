/*  */
function emailNecessaryCheck() {
  if($('#email').val() === ''){
    $('#email-hidden2').css('display','block');
  } 

  // 함수를 한번 더 호출해야하는데...

}

/* 비밀번호 유효성 체크 */
function pwCheck() {
  var pw = $("#password").val();
  var number = pw.search(/[0-9]/g);
  var english = pw.search(/[a-z]/ig);
  
  if (pw.length < 8 || number < 0 || english < 0) {
    $('#pw-hidden').css('display','block');
    return false;
  } else {
    $('#pw-hidden').css('display','none');
  }
}

function pwNecessaryCheck() {
  if($('#password').val() === ''){
    $('#pw-hidden2').css('display','block');
  } 

  // 함수를 한번 더 호출해야하는데...

}

function pwCheckNecessaryCheck() {
  if($('#password').val() === ''){
    $('#pwCheck-hidden2').css('display','block');
  }

  // 함수를 한번 더 호출해야하는데...

}


function pwDoubleCheck() {
  if ($('#password').val() !== $('#password-check').val()) {
    $('#pwCheck-hidden').css('display', 'block');
  } else {
    $('#pwCheck-hidden').css('display', 'none');
  }
}

function nicknameCheck() {
  if($('#nickname-hidden2').val() === ''){
    $('#nickname-hidden2').css('display','block');
  } else {
    $('#nickname-hidden2').css('display','none');
  }
}

/* checkbox */
$(function(){
  $('#all-check').on('change', function() {
    // #all-check의 체크 여부에 따라 #check-age 체크 여부 변경
    $('#check-age').prop('checked', $(this).prop('checked'));
    $('#check-provision').prop('checked', $(this).prop('checked'));
    $('#check-use').prop('checked', $(this).prop('checked'));
    $('#check-marketing').prop('checked', $(this).prop('checked'));
    $('#check-sms').prop('checked', $(this).prop('checked'));
  });
  
  // 모든 항목이 check가 아닐 경우 all-check가 풀리게
  
});

/* 
  1. input창 색깔 바꾸기
  2. 필수항목입니다 채워지면 없어지게 - on.이걸로 바꾸면 될지도..?
  3. 이메일 입력해야만 인증하기 버튼 눌리게
  4. 체크박스 모든 항목이 check가 아닐 경우 all-check가 풀리게
  5. 모든 항목이 check가 되면 all-check가 자동으로 눌리게
  6. 전체 항목이 충족되어야 회원가입하기 버튼 눌리게
*/
















