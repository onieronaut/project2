require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

const breeders = require("./config/breeder_seeds");
const competitions = require("./config/competition_seeds");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main"
	})
);
app.set("view engine", "handlebars");

// Routes
require("./routes/breeder-api-routes")(app);
require("./routes/competition-api-routes")(app);
require("./routes/htmlRoutes")(app);


// SET TO TRUE FOR DEV PURPOSES
var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
	syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {

	initializeDB(competitions, breeders);

	app.listen(PORT, function() {
		console.log(
			"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
			PORT,
			PORT
		);
	});
});

module.exports = app;


// Initializes database with seed values
function initializeDB(seed1, seed2) {
		
	db.Competition.bulkCreate(seed1).then(function(data){
	});
		
	db.Breeder.bulkCreate(seed2).then(function(data){
	});


}