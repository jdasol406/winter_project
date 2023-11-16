/* 비밀번호, 닉네임 유효성 체크 */
function pwCheck() {
  var pw = $("#password").val();
  var number = pw.search(/[0-9]/g);
  var english = pw.search(/[a-z]/ig);
  
  if (pw.length < 8 || number < 0 || english < 0) {
    $('#pw-hidden').css('display','block');
    $('password').css('border','1px, solid, red');
    return false;
  } 
  
  if (false) {
    return false;
  } else {
    return true;
  }
  
  
}