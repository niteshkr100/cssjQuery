$("#btn1").on("click",function(){
    $("p").css("background-color","yellow");

    // remove effect
    setTimeout(function(){
        $(".r").css("background-color","red");
        $(".pink").css("background-color","#e35fef");
        $(".b").css("background-color","blue");
    },5000)
})

$("#btn2").on("click",function(){
    $(".a").css({"background-color":"yellow","font-size":"200%"});

    // remove effect
    setTimeout(function(){
        $(".a").css("font-size","16px")
        $(".r").css("background-color","red");
        $(".pink").css("background-color","#e35fef");
        $(".b").css("background-color","blue");
    },5000)
})