var data=require("../data/friends.js");
module.exports = {
    pushHomePage: app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));

    }),

    pushSurvey: app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    })

    

}