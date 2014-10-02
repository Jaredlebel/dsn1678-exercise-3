var article = $('.sales');
var aside = $('.sales__details');

var buttonClickHandler = function () {
    var currentState = aside.attr('data-state');
    
    if (currentState == 'active') {
        aside.attr('data-state', 'inactive');
    } else {
        aside.attr('data-state', 'active'); 
    }
};

article.on('click', buttonClickHandler);