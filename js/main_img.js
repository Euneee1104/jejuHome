// $(document).ready(function () {
//     $('.bxslider').bxSlider({ // 클래스명 주의!
//         auto: true, // 자동으로 애니메이션 시작
//         speed: 500,  // 애니메이션 속도
//         pause: 3000,  // 애니메이션 유지 시간 (1000은 1초)
//         mode: 'horizontal' // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
//         // autoControls: true,  시작 및 중지버튼 보여짐
//         // pager: true 페이지 표시 보여짐
//         // captions: true,  이미지 위에 텍스트를 넣을 수 있음
//     });

// });

// 관광지 선택시 호버 및 선택 효과
$(document).on("click", "#mapsearch td", function(){
    let map         =   $(this).data("map");
    let num         =   $(this).data("num");

    // 선택한 관광지 표시
    $("#mapsearch").find("td").removeClass("selectPlace");
    $(this).addClass("selectPlace");

    // 맵에 해당 지역 호버
    $(".mapcon").find("img").removeClass("selectMap");
    $("." + map).find("img").addClass("selectMap");

    $(".info1").addClass("hide");
    $(".info2").addClass("hide");
    $(".info3").addClass("hide");
    $(".info4").addClass("hide");
    $(".info5").addClass("hide");
    $(".info6").addClass("hide");
    $(".info" + num).removeClass("hide");
});

// $(document).on("click", ".mapcon li", function(){
//     let map         =   $(this).data("map");
//     let num         =   $(this).data("num");

//      // 맵에 해당 지역 호버
//      $(".mapcon").find("img").removeClass("selectMap");
//      $("." + map).find("img").addClass("selectMap");
 
//     // 선택한 관광지 표시
//     $("#mapsearch").find("td").removeClass("selectPlace");
//     $("." + map).addClass("selectPlace");

   
//     $(".info1").addClass("hide");
//     $(".info2").addClass("hide");
//     $(".info3").addClass("hide");
//     $(".info4").addClass("hide");
//     $(".info5").addClass("hide");
//     $(".info6").addClass("hide");
//     $(".info" + num).removeClass("hide");
// });