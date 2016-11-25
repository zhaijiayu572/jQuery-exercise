$(function () {
    $(".main>a").toggle(function () {
        $(this).next("ul").slideDown("slow");
        $(this).css("background-image","url('images/up.gif')");
    },function () {
        $(this).next("ul").slideUp("slow").end()
            .css("background-image","url('images/down.gif')");
    }) ;
    $(".hmain>a").hover(function () {
        $(this).next("ul").slideDown("slow").end()
            .css("background-image","url('images/up.gif')");
    },function () {
        $(this).next("ul").slideUp().end()
            .css("background-image","url('images/down.gif')");
    })
});
