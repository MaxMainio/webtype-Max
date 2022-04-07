console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

$(document).ready(function(){
    $("#dark-mode-toggle").click(function(){
        $("body").toggleClass("darkMode");
    });
});

$(document).ready(function(){
    $("#white-mode-toggle").click(function(){
        $("body").toggleClass("whiteMode");
    });
});

$(document).ready(function(){
    $("#bling-mode-toggle").click(function(){
        $("body").toggleClass("blingMode");
    });
});