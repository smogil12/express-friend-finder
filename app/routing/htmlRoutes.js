// need GET route to /survey which should display survery page
//default catch all route that leads to home.html (/) to display home page

var path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
