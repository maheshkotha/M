$('#learnMore').click(function(){
    $('.hide-content').toggle(500, 'linear');
    $(this).text($(this).text() == 'hide' ? 'learn more' : 'hide');
});


$('#menu').click(function(){
    $('.miju-header__menu').toggle(500  );
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

