'use strict';

eventsApp.filter("durationsFilter", function() {
   return function(duration) {
        switch(duration) {
            case 1: return 'Half hour';
            case 2: return 'One hour';
            case 3: return 'Half a day';
            case 4: return 'Half a day';
            default: return 'A day';
        }
    }
});
