// 로그인 컬러 변경 

$("#member").click(function(){
    $(".login_content").hide();
    $(".tab_wrapper").show();
    $(this).css("color","#fff");
    $(this).css("background-color","#19344D");
    $(".nonCcolor").css("background-color","#fff"); // css가 더 강력해서 이름 추가
    $(".nonCcolor").css("color","#494949");

  });
  $("#nonmem").click(function(){
    $(".login_content").hide();
    $(".tab_wrapper2").show();
    $(this).css("color", "#fff");
    $(this).css("background-color", "#19344D");
    $(".Ccolor").css("background-color","#fff");
    $(".Ccolor").css("color","#494949");
  });


