var events = [
    {
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
    },

    {
        name: "Angular2 training",
        date: "02/02/2017",
        location: {
            city: "Cluj-Napoca",
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
];

module.exports.get = function (req, res) {
    var event = events[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

module.exports.save = function(req, res) {
    var event = req.body;
    events.push(event);
    res.send(event);
};