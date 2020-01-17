/* eslint-disable prettier/prettier */
const db = require("../models");

module.exports = function(app) {

	// Data for entire breeder table
	app.get("/api/breeders", function (req, res) {
		db.Breeder.findAll({}).then(function(data) {
			res.json(data);
		});
	});
    
    
	// Search by breed
	app.get("/api/breeders/:breed", function (req, res) {
		db.Breeder.findAll({
			where: {
				breed: req.params.breed
			}
		}).then(function(data) {
			res.json(data);
		});
	});

	// Search by upcoming litters (Boolean)
	app.get("/api/breeders/:litters", function (req, res) {
		db.Breeder.findAll({
			where: {
				litters: req.params.litters
			}
		}).then(function(data) {
			res.json(data);
		});
	});
	
	// Search by group
	app.get("/api/breeders/:group", function (req, res) {
		db.Breeder.findAll({
			where: {
				group: req.params.group
			}
		}).then(function(data) {
			res.json(data);
		});
	});
    
	// Add a new breeder to database
	app.post("/api/breeders", function (req, res) {
		db.Breeder.create(req.body).then(function(data) {
			res.json(data);
		});
	});
	
};