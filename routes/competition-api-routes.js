const db = require("../models");

module.exports = function(app) {

	// Display all competition data
	app.get("/api/competitions", function (req, res) {
		db.Competition.findAll({}).then(function(data) {
			res.json(data);
		});
	});

	// Display competition data by group
	app.get("/api/competitions/:group", function (req,res) {
		db.Competition.findAll({
			where: {
				group: req.params.group
			}
		}).then(function(data) {
			res.json(data);
		});
    });

    // Display competition data by location (zip code)
    app.get("/api/competitions/:location", function (req,res) {
		db.Competition.findAll({
			where: {
				location: req.params.location
			}
		}).then(function(data) {
			res.json(data);
		});
    });


	// Add new competition to database
	app.post("/api/competitions", function (req, res) {
		db.Competition.create(req.body).then(function(data) {
			res.json(data);
		});
	});
    

};