$(function () {
    $("tbody>tr:odd").addClass("odd");
    $("tbody>tr:even").addClass("even");
    $("tbody>tr").click(function () {
        // if($(this).hasClass("selected")){
        //     $(this).removeClass("selected")
        //         .find(":checkbox").attr("checked",false);
        // }else {
        //     $(this).addClass("selected")
        //         .find(":checkbox").attr("checked",true);
        // }
        var hasClass = $(this).hasClass("selected");
        $(this)[hasClass?"removeClass":"addClass"]("selected")
            .find(":checkbox").attr("checked",!hasClass);
    });
    $("table :checkbox:checked").parents("tr").addClass("selected");
});
