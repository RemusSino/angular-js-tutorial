'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $log, eventData) {
        $scope.event = eventData.getEvent(1);

        $scope.upVoteSession = function(session) {
            session.upvote++;
        }

        $scope.downVoteSession = function(session) {
            session.upvote--;
        }
    });
