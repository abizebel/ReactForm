$(document).ready(function(){
    //Input
    $(".rf-input > input").each(function(i, el){
        if($(el).val().length) {
            $(el).addClass('filled')
        } 
        else {
            $(el).removeClass('filled')
        }
    })
    $(".rf-input > input").change(function(){
        if($(this).val().length) {
            $(this).addClass('filled')
        }  
        else {
            $(this).removeClass('filled')
        }
    });

});