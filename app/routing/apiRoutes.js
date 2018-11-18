const friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {

        const newFriend = req.body;
        const userResponses = newFriend.scores;

        let friendName = '';
        let friendImage = '';
        let totalDifference = 10000;

        for (let i = 0; i < friends.length; i++) {

            let difference = 0;
            for (let j = 0; j < userResponses.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (difference < totalDifference) {

                totalDifference = difference;
                friendName = friends[i].name;
                friendImage = friends[i].photo;
            }
        }

        friends.push(newFriend);

        res.json({status: 'OK', friendName: friendName, friendImage: friendImage});

    })

}
