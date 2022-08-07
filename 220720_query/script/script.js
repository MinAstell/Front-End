$(document).ready(function(){

    $(".main").mouseenter(function(){
        $(this).children(".sub").stop().slideDown(100);
    });

    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().slideUp(100);
    });

    $("#btn6").click(function(){
        $("#box4").slideUp(3000, "linear", function(){
            alert("박스가 사라짐")
        });

        // linear: 가속도가 일정

        // setTimeout(function(){
        //     alert("박스가 사라짐");
        // }, 3000);
        
    });

    $("#para5").html("Guten <b>tag!</b>");
    // html 함수를 사용하면 텍스트의 태그까지 살릴 수 있음

    // var aaa = $("#para5").text();
    // text 함수는 오로지 텍스트만 가지고 옴, 태그무시

    // alert(aaa);
    
    // $("#dish li").click(function(){
    //     $(this).hide();
    // });

    // $("#btn1").click(function(){
    //     $("#dish li").show();
    // });

    // $("#input1").val("ㅎㅎㅎ");

    // var aaaa = $("#input1").val();

    // alert(aaaa);

    $("input[name='car']").click(function(){
        var car = $(this).val();
        if(car == 1)
        {
            $("#car_price").show();
        }
        else if(car == 0)
        {
            $("#car_price").hide();
        }
    });


    $("#pw1").keyup(function(){
        var len = $(this).val().length;

        if(len == 0)
        {
            $("#pw2").attr("disabled", "disabled");
        }
        else
        {
            $("#pw2").removeAttr("disabled");
        }
    });


    $("#pw1, #pw2").keyup(function(){

        var pw1 = $("#pw1").val();
        var pw2 = $("#pw2").val();

        if(pw1 == pw2)
        {
            // $("#pw_chk").attr("style", "color:green;").text("비밀번호가 일치합니다.");
            $("#pw_chk").text("비밀번호가 일치합니다.").css({
                color:"green",
                fontWeight:"normal"
            });
        }
        else
        {
            // $("#pw_chk").attr("style", "color:red;").text("비밀번호가 틀립니다.");
            $("#pw_chk").text("비밀번호가 틀립니다.").css({
                color:"red", fontWeight:"bold"
            });
        }
    });

    var num = 0;
    $("#btn7").click(function(){
        // $("#list1").append("<li>탕수육</li>");
        // 뒤에 추가

        num++;
    
        // $("#list1").prepend("<li>탕수육" + num + "</li>");
        // 앞에 추가

        $("#list1").append("<input type='text' placeholder='참가자성명"+num+"'/>");
    });

    $("#btn8").click(function(){
        // $("#list1").remove();
        // 아예 태그 자체를 지워버림

        $("#list1 input:last-of-type").remove();
    });

    $("#btn9").click(function(){
      
        $("#box5").removeClass("blue");
    });

    $("#btn10").click(function(){
      
        $("#box5").addClass("blue");
    });


    $("#box1").mouseenter(function(){
        $(this).text("이제 마우스 치우거라");
    });

    $("#box1").mouseleave(function(){
        $(this).text("마우스를 올려보세요.");
    });

    // $("#btn3").click(function(){
    //     $("#box3").fadeIn(2000);
    // });

    // $("#btn2").click(function(){
    //     $("#box3").fadeOut(2000);
    // });

    $("#btn3").click(function(){
        $("#box3").slideDown(2000);
    });

    $("#btn2").click(function(){
        $("#box3").slideUp(2000);
    });



    $("#btn4").click(function(){
        $("#box3").text("람보르기니 무르시엘라고");
    });

    $("#btn5").click(function(){
        $("#box3").text("아반떼");
    });

    $("#btn5").mouseenter(function(){
        $("#box2").css("background-color", "blueviolet");
    });

    $("#btn5").mouseleave(function(){
        $("#box2").css("background-color", "pink");
    });

});

