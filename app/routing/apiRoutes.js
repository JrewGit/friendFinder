const friendsObj = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json();
    })

    app.post('/api/friends', function (req, res) {
        friendsObj.push(req.body);
        res.json(true);
    })

}