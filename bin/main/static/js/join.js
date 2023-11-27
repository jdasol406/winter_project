// 조건에 맞지 않을 때
function resetStyles(hiddenElementSelector, targetElementSelector, titleElementSelector) {
  $(hiddenElementSelector).css('display', 'block');
  $(targetElementSelector).css('outline', '0.5px solid red');
  $(titleElementSelector).css('color', '#f67877');
}

// 조건에 맞을 때
function onStyles(hiddenElementSelector, targetElementSelector, titleElementSelector) {
  $(hiddenElementSelector).css('display', 'none');
  $(targetElementSelector).css('outline', 'none');
  $(titleElementSelector).css('color', '#000');
}


/* 이메일 함수 */
$(function(){
  $('#email').on('click', function() {
    if ($(this).val() === '') {
      resetStyles('#email-hidden2', '#email', '#email-title');
      $('#email-btn').css('pointer-events','none');
    } else {
      onStyles('#email-hidden2', '#email', '#email-title');
      $('#email-btn').css('pointer-events','auto');
      return true;      
    }
  });
  
  $('#email').on('input', function() {
    if ($(this).val() === '') {
      resetStyles('#email-hidden2', '#email', '#email-title');
      $('#email-btn').css('pointer-events','none');
    } else {
      onStyles('#email-hidden2', '#email', '#email-title');
      $('#email-btn').css('pointer-events','auto');  
      return true;
    }
  });




/* email-btn 클릭 함수 */
function emailButtonClick() {
  console.log('click');
  return true;
}

$('#email-btn').click(emailButtonClick);


/* 비밀번호 함수 */
  var pw = $("#password").val();
  var number = pw.search(/[0-9]/g);
  var english = pw.search(/[a-z]/ig);
  
  // 필수값 체크
  $('#password').on('click', function() {
    if ($('#password').val() === '') {
      resetStyles('#pw-hidden2', '#password', '#pw-title');
    } else {
      onStyles('#pw-hidden2', '#password', '#pw-title');     
      return true;
    }
  });
  
  $('#password').on('input', function() {
    if ($('#password').val() === '') {
      resetStyles('#pw-hidden2', '#password', '#pw-title');
    } else {
      onStyles('#pw-hidden2', '#password', '#pw-title');
      return true;
    }
  });


  // 유효성 검사
  $('#password').on('input', function() {
      var pw = $("#password").val();
      var number = pw.search(/[0-9]/g);
      var english = pw.search(/[a-z]/ig);
      if (pw.length < 8 || number < 0 || english < 0) {
      resetStyles('#pw-hidden', '#password', '#pw-title');
    } else {
      onStyles('#pw-hidden', '#password', '#pw-title');
      return true;
    }
  });
  
  
  /* 비밀번호 체크 함수 */
    // 필수값 체크
  $('#password-check').on('click', function() {
    if ($('#password-check').val() === '') {
      resetStyles('#pwCheck-hidden2', '#password-check', '#pw-check-title');
    } else {
      onStyles('#pwCheck-hidden2', '#password-check', '#pw-check-title');  
      return true;   
    }
  });
  
  $('#password-check').on('input', function() {
    if ($('#password-check').val() === '') {
      resetStyles('#pwCheck-hidden2', '#password-check', '#pw-check-title');
    } else {
      onStyles('#pwCheck-hidden2', '#password-check', '#pw-check-title');  
      return true; 
    }
  });


  // 유효성 검사
  $('#password-check').on('input', function() {
    if ($('#password').val() !== $('#password-check').val()) {
      resetStyles('#pwCheck-hidden', '#password-check', '#pw-check-title');
    } else {
      onStyles('#pwCheck-hidden', '#password-check', '#pw-check-title'); 
      return true;
    }
  });
  


/* 닉네임 함수 */
  $('#nickname').on('click', function() {
    if ($(this).val() === '') {
      resetStyles('#nickname-hidden2', '#nickname', '#nickname-title');
    } else {
      onStyles('#nickname-hidden2', '#nickname', '#nickname-title');
      return true;
    }
  });
  
  $('#nickname').on('input', function() {
    if ($(this).val() === '') {
      resetStyles('#nickname-hidden2', '#nickname', '#nickname-title');
    } else {
      onStyles('#nickname-hidden2', '#nickname', '#nickname-title');
      return true;
    }
  });



/* 약관동의 함수 */
// #all-check의 체크 여부에 따라 #check-age 체크 여부 변경
$('#all-check').on('change', function() {
  $('.checkbox-btn').prop('checked', $(this).prop('checked'));
});

// 모든 항목이 check가 아닐 경우 all-check가 풀리게
$('.checkbox-btn').on('click', function() {
  console.log('checkbox-check');
  if (
    $('#check-age').prop('checked') &&
    $('#check-provision').prop('checked') &&
    $('#check-use').prop('checked') &&
    $('#check-marketing').prop('checked') &&
    $('#check-sms').prop('checked')
  ) {
    $('#all-check').prop('checked', true);
    console.log('1');
  } else {
    console.log('2');
    $('#all-check').prop('checked', false);
  }
});




/* 회원가입하기 버튼 함수 */
$('#join-btn').on('click', function() {
  console.log("이메일",checkEmail());
  console.log("비밀번호",checkPassword());
  console.log("비밀번호 체크",checkPasswordMatch());
  console.log("닉네임",checkNickname());
  console.log("전체동의",checkAgreement());
  console.log("로봇",checkRobot());
    // 각 함수의 반환 값이 모두 true인지 확인
    if (
      checkEmail() &&
      checkPassword() &&
      checkPasswordMatch() &&
      checkNickname() &&
      checkAgreement() &&
      checkRobot()
    ) {
      alert("회원가입 성공");
      console.log("회원가입 성공");
    } else {
      alert("회원가입 실패");
      console.log('회원가입 실패');
    }
  });

  // 각 함수의 반환 값이 true 또는 false인지 확인하는 함수들
  function checkEmail() {
    return $('#email').val() !== ''; 
  }

  function checkPassword() {
    return $('#password').val() !== ''; 
  }

  function checkPasswordMatch() {
    return $('#password-check').val() !== ''; 
  }

  function checkNickname() {
    return $('#nickname').val() !== ''; 
  }

  function checkAgreement() {
    if(
      $('#check-age').is(':checked') &&
      $('#check-provision').is(':checked') &&
      $('#check-use').is(':checked')
    ){
      return true;
    } else {
      return false;
    }  

  }

  function checkRobot() {
    return $('#robot-check').is(':checked');

  }



});
