$(document).ready(function(){

    //hide
    $('#hide').click(function(){
        $('#one').hide();
    });

    //show
    $('#show').click(function(){
        $('#two').show();
    });
    //toogle
    $('#toggle').click(function(){
        $('#three').toggle();
    });


    //fadeIn
    $('#fadeIn').click(function(){
        $('#four').fadeIn();
    });

    //fadeOut
    $('#fadeOut').click(function(){
        $('#five').fadeOut();
    });
    //fadeToogle
    $('#fadeToggle').click(function(){
        $('#six').fadeToggle();
    });

    //slideToggle
    $('h3').click(function(){
        $('p').slideToggle();
    });

    //animate
    $('#h2').click(function(){
        $('#span').animate({right:'300px',
        'width':'300px'});
        $(this).hide(3000);
    });























});