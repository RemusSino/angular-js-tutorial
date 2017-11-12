'use strict';

eventsApp.controller("EventController",
    function EventController($scope) {
        $scope.sortOrder = 'upvote';
        $scope.event = {
            name: "Angular js training",
            date: "01/01/2017",
            location: {
                city: "Bucharest",
                country: "Romania"
            },
            sessions: [
                {
                    name: "Intro to Angular",
                    hour: "9:30",
                    room: "Vlad Tepes",
                    level: "introductory",
                    duration: 1,
                    upvote: 0
                },
                {
                    name: "Deep dive in AngularJS",
                    hour: "12:30",
                    room: "Mihai Viteazul",
                    level: "advanced",
                    duration: 2,
                    upvote: 0
                },
                {
                    name: "AngularJS 1.5 new features",
                    hour: "14:00",
                    room: "Matei Basarab",
                    level: "intermediate",
                    duration: 4,
                    upvote: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upvote++;
        }

        $scope.downVoteSession = function (session) {
            session.upvote--;
        }
    });
