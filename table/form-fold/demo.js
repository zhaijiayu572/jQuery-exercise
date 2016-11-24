$(function () {
    $(".parent").click(function () {
        $(this).toggleClass("selected")
            .siblings(".child_"+this.id).toggle();
    })
});
