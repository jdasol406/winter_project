/* global variation */
var postArray = [];
var commentArray =[];
var hiddenValue = 0;
$("#hidden-key").val(hiddenValue);

/* function */
//input 비우는 함수
function resetInput(){
  $("#input-title, #input-price, #input-category").val('');
}

// 글쓰기 버튼
function writeBoard() {
  resetInput();
  
  $(".writeBoard").show();
}

// table만드는 함수
function createTable(array) {
  var tbody = $("#tableContainer tbody").empty();
  
  // 배열 내의 각 객체에 대해 행을 생성 <- 여기 고쳐야함
  $.each(array, function (index, row) {
    var newRow = `<tr key="${row.hiddenValue}" style="text-align: center;">
                    <td style="text-align: center;">${index + 1}</td>
                    <td style="text-align: center;">${row.title}</td>
                    <td style="text-align: center;">작성자</td>
                    <td style="text-align: center;">작성일</td>
                    <td style="text-align: center;">조회</td>
                  </tr>`;
    
    tbody.prepend(newRow);
  });
}


// inputReadOnly 함수
function inputReadOnly(bool){
  $("#post-title").prop("readOnly", bool);
  $("#post-price").prop("readOnly", bool);
  $("#post-category").prop("readOnly", bool);
}

// 등록 버튼
$("#registration-btn").on("click", function() {
  $("#update-go").show();
  $(".writeBoard").hide();
    
  var title = $("#input-title").val();
  var price = $("#input-price").val();
  var category = $("#input-category").val(); 

  hiddenValue++;
  
  var obj = { // 행 정보를 하나의 배열로 묶어서 배열에 추가
    title,
    price,
    category,
    hiddenValue
  };
  postArray.push(obj);
  
  console.log(JSON.stringify(postArray, null, 2));

  $(".addComment").remove();
  resetInput();
  createTable(postArray); 
  
});

// 댓글등록 버튼
$("#comment-registration").on("click", function() {
  $(".writeBoard").hide();
    
  var comment = $("#post-comment").val();
  var hidden = $("#hidden-key").val();
  
  var obj = { // 행 정보를 하나의 배열로 묶어서 배열에 추가
    hidden,
    comment
  };

  commentArray.push(obj);
  
  console.log(JSON.stringify(commentArray, null, 2));
  
  var comment = $("#post-comment").val();

  $("<div>").addClass("addComment").text(comment).prependTo(".comment-area");

  
  $("#post-comment").val('');  
});

// 이벤트 위임으로 동적으로 추가되는 tr요소들에 대한 이벤트를 처리할 수 있도록 해줌
$("#tableContainer tbody").on("click", "tr", function() {
  var clickedRowId = $(this).attr("key");

  var clickedObject = postArray.find(function (obj) {
    return obj.hiddenValue === parseInt(clickedRowId);
  });
  
  $("#post-title").val(clickedObject.title);
  $("#post-price").val(clickedObject.price);
  $("#post-category").val(clickedObject.category);
  $("#hidden-key").val(clickedRowId);
  
  // 댓글
  var filteredComments = commentArray.filter(function(comment) {
    return comment.hidden === clickedRowId;
  });

  for (var i = 0; i < filteredComments.length; i++) {
    var comment = filteredComments[i];
  $("<div>").addClass("addComment").text(comment.comment).prependTo(".comment-area");
  }
  
  inputReadOnly(true);

  $("#update-btn").hide();
  $(".post").show();

});

// 삭제 버튼
$("#delete-btn").on("click", function() {
  var hidden = $("#hidden-key").val();

  var indexToRemove = postArray.findIndex(function(obj) {
  return obj.hiddenValue === parseInt(hidden);
  });
  
  postArray.splice(indexToRemove, 1); // indexToRemove에서 1개의 요소를 삭제
  
  createTable(postArray);
  
  console.log(JSON.stringify(postArray, null, 2));
  
  $(".post").hide();
  
  $(".addComment").remove();
  $("#post-comment").val('');
  $(".comment").show();

});
  
  // 수정등록 버튼
$("#update-btn").on("click", function() {
  var title = $("#post-title").val();
  var price = $("#post-price").val();
  var category = $("#post-category").val();
  var hidden = $("#hidden-key").val();

  // hidden 값을 사용하여 해당 객체를 찾음
  var postToUpdate = postArray.find(function(obj) {
    return obj.hiddenValue === parseInt(hidden);
  });
  
  // 해당 객체가 존재하면 속성을 업데이트
  if (postToUpdate) {
    postToUpdate.title = title;
    postToUpdate.price = price;
    postToUpdate.category = category;
  }

  createTable(postArray);
  
  $("#update-go").show();
  
  console.log(JSON.stringify(postArray, null, 2));

  $(".post").hide();
  
  $(".addComment").remove();
  $("#post-comment").val('');
  $(".comment").show();
  
});

// 취소 버튼
$("#cancel-btn").on("click", function() {
  $(".writeBoard").hide();
  $(".addComment").remove();
  $("#post-comment").val('');
});

// 목록 버튼
$("#list").on("click", function() {
  $(".post").css('display','none');
  $("#update-go").show();
  $(".addComment").remove();
  $("#post-comment").val('');
  $(".comment").show();
});

// 수정하기 버튼
$("#update-go").on("click", function() {
  $("#update-btn").show();
  $(".comment").hide();
  $("#update-go").hide();
  $(".addComment").remove();
  $("#post-comment").val('');
  
  inputReadOnly(false);
  
})





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



 