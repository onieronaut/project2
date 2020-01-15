const db = require("../models");

module.exports = function(app) {

    app.get("/api/breeders", function (req, res) {
        db.Breeder.findAll({}).then(function(data) {
            res.json(data);
        });
    });

};