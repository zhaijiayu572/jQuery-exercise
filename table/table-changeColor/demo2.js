$(function () {
    $("tbody>tr:odd").addClass("odd");
    $('tbody>tr:even').addClass("even");
    $("tbody>tr").click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected")
            .end()
            .find(':radio').attr('checked',true);
    });
    $("table :radio:checked").parents("tr").addClass("selected");
});
