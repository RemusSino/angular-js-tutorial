'use strict';
/*
//example with $http service
eventsApp.factory('eventData', function ($http) {
    return {
        getEvent: function () {
            return $http({method: 'GET', url: '/data/event/1'});
        }
    }
});*/

//example with $resource service
eventsApp.factory('eventData', function ($resource) {
    return {
        getEvent: function (id) {
            return $resource('/data/event/:id', {id: '@id'}).get({id: id});
        }
    }
});