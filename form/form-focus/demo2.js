$(function () {
    $(':input').focus(function () {
        $(this).addClass('focus');
        if($(this).val() == this.defaultValue){
            this.value = "";
        }
    }).blur(function () {
        $(this).removeClass('focus');
        if($(this).val() == ""){
            this.value = this.defaultValue;
        }
    })
});