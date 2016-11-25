$(function () {
    var $div_li = $("#tab_menu li");
    $div_li.click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        var index = $div_li.index(this); //可以获得指定元素相对于选择器的位置
        $("#tab_box>div")
            .eq(index).removeClass("hide")
            .siblings().addClass("hide");
    }).hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover");
    })
});
