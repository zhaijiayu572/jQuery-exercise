$(function () {
    $("tbody tr:even").css("background-color",'#edf');
    var $editTd = $("td.editable");
    $editTd.click(function(){
        var $ObjTd = $(this);
        var $ObjInput = $("<input type='text'/>");
        $ObjInput.width($(this).width());
        $ObjInput.css({"border":"none","background-color":$(this).css("background-color")});
        if($(this).children("input[type='text']").size() > 0){
            return false;
        }
        $ObjInput.val($(this).text());
        $(this).empty()
            .append($ObjInput);
        $ObjInput.trigger("select")
            .keyup(function () {
                var KeyCode = event.which;
                if(KeyCode == 13){
                    // $(this).empty();
                    console.log(KeyCode);
                    $ObjTd.text($ObjInput.val());
                }
            })
    })
});
