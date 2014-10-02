var buttonLeft = $('.sales-left');
var buttonRight = $('.sales-right');
var asideLeft = $('.sdl');
var asideRight = $('.sdr');

var buttonClickHandler = function () {
    var currentState = asideLeft.attr('data-state');
    
    if (currentState == 'active') {
        asideLeft.attr('data-state', 'inactive');
    } else {
        asideLeft.attr('data-state', 'active'); 
    }
};

var buttonClickHandler = function () {
    var currentState = asideRight.attr('data-state');
    
    if (currentState == 'active') {
        asideRight.attr('data-state', 'inactive');
    } else {
        asideRight.attr('data-state', 'active'); 
    }
};

buttonLeft.on('click', buttonClickHandlerLeft);
buttonRight.on('click', buttonClickHandlerRight);