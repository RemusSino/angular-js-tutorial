'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $log, eventData) {
        eventData.getEvent().success(function (event) {
            $scope.event = event;
        }).error(function (data, status, headers, config) {
            $log.warn(data, status, headers(), config);
        });

        $scope.upVoteSession = function (session) {
            session.upvote++;
        };

        $scope.downVoteSession = function (session) {
            session.upvote--;
        };
    })
;
