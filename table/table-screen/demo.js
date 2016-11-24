$(function () {
    $("#filterName").keyup(function () {
        $("tbody>tr").hide()
            .filter(":contains('"+$(this).val()+"')").show();
    })
});
