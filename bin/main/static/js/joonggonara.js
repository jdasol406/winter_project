var postArray = [];
var selectedRow;

//input 비우는 함수
function resetInput(){
  $("#input-title").val('');
  $("#input-price").val('');
  $("#input-category").val('');  
}

// 글쓰기 버튼
function writeBoard() {
  resetInput();
  
  $('.writeBoard').css('display','block');
}


// 등록 버튼
$("#registration-btn").on("click", function() {
    
    $('.writeBoard').css('display','none');
    
    var title = $("#input-title").val();
    var price = $("#input-price").val();
    var category = $("#input-category").val();
    
    var rowCount = $("#tableContainer tbody tr").length + 1;
    

    var newRow = '<tr key="' + rowCount + '" style="text-align: center;">';
    newRow += '<td style="text-align: center;">' + rowCount + '</td>';
    newRow += '<td style="text-align: center;">' + title + '</td>';
    newRow += '<td style="text-align: center;">작성자</td>';
    newRow += '<td style="text-align: center;">작성일</td>';
    newRow += '<td style="text-align: center;">조회</td>';
    
    
   $("#tableContainer").find("tbody").prepend(newRow);
   
   // 행 정보를 하나의 배열로 묶어서 배열에 추가
   var obj = {
     rowCount: rowCount,
     title: title,
     price: price,
     category: category
   }
   postArray.push(obj);
    
   resetInput();
   
});

// 이벤트 위임으로 동적으로 추가되는 tr요소들에 대한 이벤트를 처리할 수 있도록 해줌
$("#tableContainer tbody").on("click", "tr", function() {
  var clickedRowId = $(this).attr("key");

  var clickedObject = postArray.find(function (obj) {
      return obj.rowCount == clickedRowId;
   });
   
   selectedRow = clickedObject.rowCount;
   
  $("#post-title").val(clickedObject.title);
  $("#post-price").val(clickedObject.price);
  $("#post-category").val(clickedObject.category);
  
  
  $('.post').css('display', 'block');
    
});

// 취소 버튼
$("#cancel-btn").on("click", function() {
  $('.writeBoard').css('display','none');
});

// 목록 버튼
$("#list").on("click", function() {
  $('.post').css('display','none');
});

// 삭제 버튼
$("#delete-btn").on("click", function() {
  console.log(selectedRow);
  
  // selectedRow에 저장된 key 값을 가진 tr 삭제
  $("#tableContainer tbody tr[key='" + selectedRow + "']").remove();
  
  
  $('.post').css('display','none');
});






// table 클릭 시 writeBoard open
//$(document).on("click", "#tableContainer tbody tr", function() {
//  var clickedRow = $(this);
//      
//  var postTitle = clickedRow.find("td:eq(1)").text(); 
//
//  $("#post-title").val(postTitle);
//  
//
//  $('.post').css('display', 'block');
//});

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



 