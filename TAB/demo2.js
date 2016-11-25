$(function () {
    $("ul li").mouseover(function () {
        $(this).addClass("liOne")
            .siblings().removeClass("liOne");
        var index = $(this).index();
        $("div").hide()
            .eq(index).show();
    })
});
