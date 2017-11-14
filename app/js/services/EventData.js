'use strict';

eventsApp.factory('eventData', function ($http, $log) {
    return {
        getEvent: function (successCallBack) {
            $http({method: 'GET', url: '/data/event/1'})
                .success(function (data, status, header, config) {
                    successCallBack(data);
                })
                .error(function (data, status, header, config) {
                    $log.warn(data, status, headers(), config);
                });

        }

        /* event: {
             name: "Angular js training",
             date: "01/01/2017",
             location: {
                 city: "Bucharest",
                 country: "Romania"
             },
             sessions: [
                 {
                     name: "Intro to angular",
                     hour: "9:30",
                     room: "Vlad Tepes",
                     upvote: 0
                 },
                 {
                     name: "Angular new features",
                     hour: "12:30",
                     room: "Mihai Viteazul",
                     upvote: 0
                 },
                 {
                     name: "Angular 1.5 new features",
                     hour: "14:00",
                     room: "Matei Basarab",
                     upvote: 0
                 }
             ]
         }*/
    }
});