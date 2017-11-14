'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        // $scope.event = eventData.event;

        eventData.getEvent(function(event) {
            $scope.event = event;
        })

        $scope.upVoteSession = function(session) {
            session.upvote++;
        }

        $scope.downVoteSession = function(session) {
            session.upvote--;
        }
    });
