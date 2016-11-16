$(function () {
    var $comment = $("#comment");
    $("#bigger").click(function () {
        if(!$comment.is(":animated")){
            $comment.animate({scrollTop:"+=50"},400);
        }
    });
    $("#smaller").click(function () {
        if(!$comment.is(":animated")){
            $comment.animate({scrollTop:"-=50"},400);
        }
    })
});
