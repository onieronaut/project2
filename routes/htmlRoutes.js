var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome to unLEASHED!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/breeders", function(req, res) {
    res.render("breeders");
  });

  app.get("/dogsearch", function(req, res) {
    res.render("dogsearch");
  });

  app.get("/events", function(req, res) {
    res.render("events");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  app.get("/add-breeder", function(req, res) {
    res.render("add-breeder");
  });

  app.get("/add-competitor", function(req, res) {
    res.render("add-competitor");
  });

  app.get("/add-event", function(req, res) {
    res.render("add-event");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
