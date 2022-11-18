$(document).on("click", "#mapsearch li", function(){
    let num         =   $(this).data("num");

    // 선택한 인기관광지 표시
    $("#mapsearch").find("li").removeClass("select_tour");
    $(this).addClass("select_tour");
    // $(this).css("color", "#fff");


    
       // 지역에 해당 인기관광지 호버
    $(".mainImg").find(".selectTour_on").removeClass("Tour_on");
    $(".mainImg").find(".selectTour_on").addClass("Tour_on");

    $(".tour1").addClass("hide");
    $(".tour2").addClass("hide");
    $(".tour3").addClass("hide");
    $(".tour4").addClass("hide");
    $(".tour5").addClass("hide");
    $(".tour6").addClass("hide");
    $(".tour" + num).removeClass("hide");
}); 