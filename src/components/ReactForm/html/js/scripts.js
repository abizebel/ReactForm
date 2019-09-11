$(document).ready(function(){
    //Input
    $(".rf-input > input").each(function(i, el){
        if($(el).val().length) {
            $(el).closest('.rf-input').addClass('filled')
        } 
        else {
            $(el).closest('.rf-input').removeClass('filled')
        }
    })
    $(".rf-input > input").change(function(){
        if($(this).val().length) {
            $(this).closest('.rf-input').addClass('filled')
        }  
        else {
            $(this).closest('.rf-input').removeClass('filled')
        }
    });
    $(".rf-input > textarea").each(function(i, el){
        if($(el).val().length) {
            $(el).closest('.rf-input').addClass('filled')
        } 
        else {
            $(el).closest('.rf-input').removeClass('filled')
        }
    })
    $(".rf-input > textarea").change(function(){
        if($(this).val().length) {
            $(this).closest('.rf-input').addClass('filled')
        }  
        else {
            $(this).closest('.rf-input').removeClass('filled')
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
    $(".rf-tag > input").each(function(i, el){

        if($(el).val().length) {
            $(el).closest('.rf-tag').addClass('filled')
        } 
        else {
            $(el).closest('.rf-tag').removeClass('filled')
        }
    })
    $(".rf-tag > input").change(function(){
        if($(this).val().length) {
            $(this).closest('.rf-tag').addClass('filled')
        } 
        else {
            $(this).closest('.rf-tag').removeClass('filled')
        }
    });
    $(".rf-tag > ul").each(function(i, el){
        if($(el).find('li').length) {
            $(el).closest('.rf-tag').addClass('filled')
        } 

    })
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