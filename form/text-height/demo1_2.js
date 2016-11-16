$(function () {
    var $comment = $("#comment");
    $("#bigger").click(function () {
        if(!$comment.is(":animated")){
            if($comment.height()<500){
                $comment.animate({height:"+=50"},400);          //不判断是否在进行动画，则动画会延期执行,即在不点击的时候也会执行动画
            }
        }

    });
    $("#smaller").click(function () {
        if(!$comment.is(":animated")){
            if($comment.height()>50){
                $comment.animate({height:"-=50"},400);
            }
        }

    })
});
