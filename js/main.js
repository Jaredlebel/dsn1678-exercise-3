var article = $('.sales');
var aside = $('.sales__details');

var buttonClickHandler = function () {
    var currentState = sales__details.attr('data-state');
    
    if (currentState == 'active') {
        sales__details.attr('data-state', 'inactive');
    } else {
        sales__details.attr('data-state', 'active'); 
    }
};

theButton.on('click', buttonClickHandler);