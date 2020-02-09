//need GET route with the url /api/friends. This will display a JSON of all possible friends
// need a POST routes /api/friends. This will handle incoming survey results. Will also be used to handle compatability logic

var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};
