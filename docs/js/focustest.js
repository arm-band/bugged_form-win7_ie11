$(function(){
    $('input[type=text], input[type=email]').focus(function(){
        $(this).addClass('focus');
    }).blur(function(){
        $(this).removeClass('focus');
    });
});