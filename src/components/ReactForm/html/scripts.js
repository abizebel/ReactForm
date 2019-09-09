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
    //Select

    $(document).click(function(e){
        if ($(e.target).closest('.rf-select').length == 0) {
            $('.rf-select').removeClass('active')
        }

    })
    $('.rf-select').click(function(e){
        if(!$(this).hasClass('active')) {
            $('.rf-select').removeClass('active')
            $(this).addClass('active')
        }
        else {
            if ($(e.target).closest('.rf-options').length == 0) {
                $(this).removeClass('active')
            }
            
        }

    })
    //Tag
    $(document).click(function(e){
        if ($(e.target).closest('.rf-tag').length == 0) {
            $('.rf-tag').removeClass('active')
        }

    })
    $('.rf-tag').click(function(e){
        if(!$(this).hasClass('active')) {
            $('.rf-tag').removeClass('active')
            $(this).addClass('active')
        }
        else {
            if ($(e.target).closest('.rf-options').length == 0) {
                $(this).removeClass('active')
            }
            
        }

    })

});