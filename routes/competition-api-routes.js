const db = require("../models");

module.exports = function(app) {

    app.get("/api/competitions", function (req, res) {
        db.Competition.findAll({}).then(function(data) {
            res.json(data);
        });
    });

};