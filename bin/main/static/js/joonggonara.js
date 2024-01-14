/*
페이지 이동할 때 코드

// writeBoard 페이지에서 table을 새로 만들어서 로컬스토리지에 저장하는 코드
$(document).ready(function() {
  console.log("test");
  $("#registration-btn").on("click", function() {
      console.log("registeration");
      
      var title = $("#input-title").val();
      var price = $("#input-price").val();
      var category = $("#input-category").val();

      var newRow = '<tr style="text-align: center;">';
      newRow += '<td style="text-align: center;"></td>';
      newRow += '<td style="text-align: center;">' + title + '</td>';
      newRow += '<td style="text-align: center;">작성자</td>';
      newRow += '<td style="text-align: center;">작성일</td>';
      newRow += '<td style="text-align: center;">조회</td>';

      var existingData = localStorage.getItem('tableData');
      existingData = existingData ? JSON.parse(existingData) : [];

      // 새로운 데이터 추가
      existingData.push(newRow);

      // 데이터 저장
      localStorage.setItem('tableData', JSON.stringify(existingData));
      
      window.location.href = "/joonggonara";
      
     
  });
});

//joonggonara 페이지에 table가져오는 코드
$(document).ready(function() {
var storedData = localStorage.getItem('tableData');
      storedData = storedData ? JSON.parse(storedData) : [];

      // 테이블에 데이터 추가
      $("#tableContainer").find("tbody").append(storedData.join(''));
});

//로컬 스토리지를 비우는 코드
function clearTable() {
    $("#tableContainer").find("tbody").empty();
    localStorage.removeItem('tableData');
}
*/

// 글쓰기 버튼
function writeBoard() {
  $("#input-title").val('');
  $("#input-price").val('');
  $("#input-category").val('');
     
  $('.writeBoard').css('display','block');
}

// 등록 버튼
$(function() {
  console.log("test");
  $("#registration-btn").on("click", function() {
      console.log("registeration");
      
      $('.writeBoard').css('display','none');
      
      var title = $("#input-title").val();
      var price = $("#input-price").val();
      var category = $("#input-category").val();

      var newRow = '<tr id="' + title + '" style="text-align: center;">';
      newRow += '<td style="text-align: center;"></td>';
      newRow += '<td style="text-align: center;">' + title + '</td>';
      newRow += '<td style="text-align: center;">작성자</td>';
      newRow += '<td style="text-align: center;">작성일</td>';
      newRow += '<td style="text-align: center;">조회</td>';
   
     $("#tableContainer").find("tbody").append(newRow);
     
     $("#input-title").val('');
     $("#input-price").val('');
     $("#input-category").val('');
  });
});

// table 클릭 시 writeBoard open
$(document).on("click", "#tableContainer tbody tr", function() {
  var clickedRow = $(this);
      
  var title = clickedRow.find("td:eq(1)").text(); 

  $("#input-title").val(title);

  $('#update-btn').css('display', 'block');
  $('.writeBoard').css('display', 'block');
});

// 취소 버튼
$("#cancel-btn").on("click", function() {
  $('.writeBoard').css('display','none');
});

// 목록 버튼
$("#list").on("click", function() {
  $('.post').css('display','none');
});





 