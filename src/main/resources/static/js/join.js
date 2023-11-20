/* 필수항목 체크 함수 */
function emailNecessaryCheck() {
  if($('#email').val() === ''){
    $('#email-hidden2').css('display','block');
    $('#email').css('outline','0.5px solid red');
    $('#email-title').css('color','#f67877');
    return false;
  } else {
    $('#email-hidden2').css('display','none');
    $('#email').css('outline','none');
    $('#email-title').css('color','#000');
    $('#email-btn').css('pointer-events','auto');
    return true;
  }
}

/* email-btn 클릭 함수 */
function emailButtonClick() {
  console.log('click');
}

$('#email-btn').click(emailButtonClick);

function pwNecessaryCheck() {
  if($('#password').val() === ''){
    $('#pw-hidden2').css('display','block');
    $('#password').css('outline','0.5px solid red');
    return false;
  }  else {
    $('#pw-hidden2').css('display','none');
    return true;
  }
}

function pwCheckNecessaryCheck() {
  if($('#password-check').val() === ''){
    $('#pwCheck-hidden2').css('display','block');
    $('#password-check').css('outline','0.5px solid red');
    return false;
  } else {
    $('#pwCheck-hidden2').css('display','none');
    return true;
  }
}

function nicknameCheck() {
  if($('#nickname').val() === ''){
    $('#nickname-hidden2').css('display','block');
    $('#nickname').css('outline','0.5px solid red');
    $('#nickname-title').css('color','#f67877');
    return false;
  } else {
    $('#nickname-hidden2').css('display','none');
    $('#nickname').css('outline','none');
    $('#nickname-title').css('color','#000');
    return true;
  }
}

//------------------------------------------------------------------------

/* 유효성 체크 */
function pwCheck() {
  var pw = $("#password").val();
  var number = pw.search(/[0-9]/g);
  var english = pw.search(/[a-z]/ig);
  
  if (pw.length < 8 || number < 0 || english < 0) {
    $('#pw-hidden').css('display','block');
    $('#password').css('outline','0.5px solid red');
    $('#pw-title').css('color','#f67877');
    return false;
  } else {
    $('#pw-hidden').css('display','none');
    $('#password').css('outline','none');
    $('#pw-title').css('color','#000');
    return true;
  }
}


function pwDoubleCheck() {
  if ($('#password').val() !== $('#password-check').val()) {
    $('#pwCheck-hidden').css('display', 'block');
    $('#password-check').css('outline','0.5px solid red');
    $('#pw-check-title').css('color','#f67877');
    return false;
  } else {
    $('#pwCheck-hidden').css('display', 'none');
    $('#password-check').css('outline','none');
    $('#pw-check-title').css('color','#000');
    return true;
  }
}

//------------------------------------------------------------------------

/* checkbox */
// #all-check의 체크 여부에 따라 #check-age 체크 여부 변경
$('#all-check').on('change', function() {
  $('#check-age').prop('checked', $(this).prop('checked'));
  $('#check-provision').prop('checked', $(this).prop('checked'));
  $('#check-use').prop('checked', $(this).prop('checked'));
  $('#check-marketing').prop('checked', $(this).prop('checked'));
  $('#check-sms').prop('checked', $(this).prop('checked'));
});

// 모든 항목이 check가 아닐 경우 all-check가 풀리게
function checkboxCheck() {
  if (
      $('#check-age').prop('checked') &&
      $('#check-provision').prop('checked') &&
      $('#check-use').prop('checked') &&
      $('#check-marketing').prop('checked') &&
      $('#check-sms').prop('checked')
  ) {
      $('#all-check').prop('checked', true);
      console.log("check");
  } else {
      $('#all-check').prop('checked', false);
      console.log("check-none");
  }
}

//------------------------------------------------------------------------

/*  전체 항목이 충족되어야 회원가입하기 버튼 눌리게 */

// $('#all-check').prop('checked')

function areAllFieldsValid() {
  return (
    emailNecessaryCheck() &&
    pwNecessaryCheck() &&
    pwCheckNecessaryCheck() &&
    nicknameCheck() &&
    pwCheck() &&
    pwDoubleCheck()
  );
}

// 모든 필수 항목이 충족되어야 login-btn이 활성화됨
function updateLoginButton() {
  if (areAllFieldsValid() === false) {
    console.log("false")
    $('#join-btn').css('pointer-events','none');
    $('input').css('outline','0.5px solid red');
  } 
}

// 필수 항목이 변경될 때마다 업데이트
$('#email, #password, #password-check, #nickname').on('input', updateLoginButton);

// 체크박스 상태 변경 시 업데이트
$(':checkbox').on('change', function() {
  checkboxCheck();
  updateLoginButton();
});


/* join-btn 클릭 함수 */
function joinButtonClick() {
  console.log('click');
}

$('.join-btn').click(joinButtonClick);













