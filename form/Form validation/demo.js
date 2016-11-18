$(function () {
    $("form :input.required").each(function () {
        var $required = $("<strong class='high'>*</strong>");
        $(this).parent().append($required);
    }).blur(function () {
        $(this).nextAll(".formtips").remove();
        if($(this).is("#username")){
            if(this.value==""||this.value.length<6){
                var errorMsg = "请输入至少6位的用户名";
                $(this).next().after("<span class='formtips onError'>"+errorMsg+"</span>");
            }else{
                var sucessMsg = "输入正确";
                $(this).next().after("<span class='formtips onSucess'>"+sucessMsg+"</span>");
            }
        }
        if($(this).is("#email")){
            if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) )){ //正则不会
                var errorMsg = "邮箱格式错误";
                $(this).next().after("<span class='formtips onError'>"+errorMsg+"</span>");
            }else{
                var sucessMsg = "输入正确";
                $(this).next().after("<span class='formtips onSucess'>"+sucessMsg+"</span>");
            }
        }
    }).keyup(function () {
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });
    $("#send").click(function () {
        $("form :input.required").trigger("blur");
        var numberError = $("form .onError").length;
        if(numberError){
            return false;
        }
        alert(numberError);
    });
    $("#res").click(function () {
        $(".formtips").remove();
    })
});
