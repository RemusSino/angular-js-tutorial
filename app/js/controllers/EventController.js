'use strict';

eventsApp.controller("EventController",
    function EventController($scope) {
        $scope.event = {
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
        }

        $scope.upVoteSession = function(session) {
            session.upvote++;
        }

        $scope.downVoteSession = function(session) {
            session.upvote--;
        }
    });
