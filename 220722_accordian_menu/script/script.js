$(document).ready(function(){

    $("#ham").click(function(){
        $("#backdrop").fadeIn(600);
        $("#menu").css("right","0");
        $("body").css("overflow", "hidden");
    });

    $("#close, #backdrop").click(function(){
        $("#backdrop").fadeOut(600);
        $("#menu").css("right","-320px");
        $("body").css("overflow", "auto");
    });

    $(".main").click(function(){
        var vis = $(this).children(".sub").is(":visible");
        if(vis)
        {
            $(this).children(".sub").slideUp();
            $(this).children("a").children("i").removeClass("rev");
        }
        else
        {
            $(this).children(".sub").slideDown();
            $(this).children("a").children("i").addClass("rev");
        }
        $(this).siblings().children(".sub").slideUp();
        $(this).siblings().children("a").children("i").removeClass("rev");

        // $(this).children(".sub").slideToggle();
        $(this).siblings().children(".sub").slideUp();
    });





});
