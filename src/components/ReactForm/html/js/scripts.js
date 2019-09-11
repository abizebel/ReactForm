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


    //Autocomplete
    $(document).click(function(e){
        if ($(e.target).closest('.rf-autocomplete').length == 0) {
            $('.rf-autocomplete').removeClass('active')
        }

    })
    $('.rf-autocomplete > input').keyup(function(e){
        if(!$(e.target).closest('.rf-autocomplete').hasClass('active')) {
            $('.rf-autocomplete').removeClass('active')
            $(e.target).closest('.rf-autocomplete').addClass('active')
        }
        else {
            if ($(e.target).closest('.rf-options').length == 0) {
                $(e.target).closest('.rf-autocomplete').removeClass('active')
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
    $('.rf-tag > input').keyup(function(e){
        if(!$(e.target).closest('.rf-tag').hasClass('active')) {
            $('.rf-tag').removeClass('active')
            $(e.target).closest('.rf-tag').addClass('active')
        }
        else {
            if ($(e.target).closest('.rf-options').length == 0) {
                $(e.target).closest('.rf-tag').removeClass('active')
            }
            
        }

    })

});