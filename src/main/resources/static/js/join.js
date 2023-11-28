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
      $('#email-required').css('border-color','#f67877');
    } else {
      onStyles('#email-hidden2', '#email', '#email-title');
      return true;      
    }
  });
  
  $('#email').on('input', function() {
    if ($(this).val() === '') {
      resetStyles('#email-hidden2', '#email', '#email-title');
      $('#email-btn').css('pointer-events','none');
    } else {
      onStyles('#email-hidden2', '#email', '#email-title');
      return true;
    }
  });

//  var selectBox = $(".email-menu");
//  var selectedValue = selectBox.val();

  var selectedValue = $(".email-menu option:selected").text();

  $("select[name=menu]").change(function(){
  console.log($(this).val()); //value값 가져오기
  
  if (selectedValue === null) {
      $('#email-btn').css('pointer-events','none');
      $('#email-required').css('border-color','#f67877');
      console.log("required-1");
    } else {
      onStyles('#email-hidden2', '#email', '#email-title');
      $('#email-required').css('border-color','#e6e6e6');
      $('#email-btn').css('pointer-events','auto');
      $('#email-btn').css('background','#46c5f0');
      $('#email-btn').css('color','#fff');
      console.log("required-2");
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
    console.log($(this).val().length);
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
    } else if($(this).val().length === 1) {
      resetStyles('#nickname-hidden3', '#nickname', '#nickname-title');
      $('#nickname-hidden2').css('display','none');
    }
    else {
      onStyles('#nickname-hidden2', '#nickname', '#nickname-title');
      $('#nickname-hidden3').css('display','none');
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
      
      if (!checkEmail()) {
      resetStyles('#email-hidden2', '#email', '#email-title');
      $('#email-required').css('border-color','#f67877');
    } else if(checkEmail()){
      onStyles('#email-hidden2', '#email', '#email-title');
    }
    if (!checkPassword()) {
      resetStyles('#pw-hidden2', '#password', '#pw-title');
    }else if(checkPassword()){
      onStyles('#pw-hidden2', '#password', '#pw-title');
    }
    if (!checkPasswordMatch()) {
      resetStyles('#pwCheck-hidden2', '#password-check', '#pw-check-title');
    }else if(checkPasswordMatch()){
      onStyles('#pwCheck-hidden2', '#password-check', '#pw-check-title');
    }
    if (!checkNickname()) {
      resetStyles('#nickname-hidden2', '#nickname', '#nickname-title');
    }else if(checkNickname()){
      onStyles('#nickname-hidden2', '#nickname', '#nickname-title');
    }
    if (!checkAgreement()) {
      resetStyles('#provision-hidden2', '.provision-box', '#provision-title');
    }else if(checkAgreement()){
      onStyles('#provision-hidden2', '.provision-box', '#provision-title');
    }
    if (!checkRobot()) {
      $('#robot-hidden2').css('display','block');
    }else if(checkRobot()){
      $('#robot-hidden2').css('display','none');
    }
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
      onStyles('#provision-hidden2', '.provision-box', '#provision-title');
      return true;
    }else if(
       $('#all-check').is(':checked') 
    ){
      onStyles('#provision-hidden2', '.provision-box', '#provision-title');
      return true;
    } else {
      console.log();
      return false;
    }  
  }
  
  $('#check-age').on('click', function() {
        if(checkAgreement()){
          onStyles('#provision-hidden2', '.provision-box', '#provision-title');
        } else {
        resetStyles('#provision-hidden2', '.provision-box', '#provision-title');
      }

    });
    
  $('#check-provision').on('click', function() {
      if(checkAgreement()){
        onStyles('#provision-hidden2', '.provision-box', '#provision-title');
      } else {
        resetStyles('#provision-hidden2', '.provision-box', '#provision-title');
      }
  });
  
  $('#check-use').on('click', function() {
        if(checkAgreement()){
          onStyles('#provision-hidden2', '.provision-box', '#provision-title');
        } else {
        resetStyles('#provision-hidden2', '.provision-box', '#provision-title');
      }

    });
    
    $('#all-check').on('click', function() {
        if($('#all-check').is(':checked')){
          onStyles('#provision-hidden2', '.provision-box', '#provision-title');
        } else {
        resetStyles('#provision-hidden2', '.provision-box', '#provision-title');
      }

    });
  

  function checkRobot() {
    return $('#robot-check').is(':checked');
  }
  
  $('#robot-check').on('click', function() {
        if(checkRobot()){
          $('#robot-hidden2').css('display','none');
          console.log("robot-true!");
        } else {
          $('#robot-hidden2').css('display','block');
        }
    });

});
