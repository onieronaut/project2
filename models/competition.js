module.exports = function (sequelize, DataTypes) {
	const Competition = sequelize.define("Competition", {
		competitionName: DataTypes.STRING,
		email: DataTypes.STRING,
		dateOfcompetition: DataTypes.STRING,
		locationOfcompetition: DataTypes.STRING,
		description: DataTypes.TEXT,
		group: DataTypes.STRING

	});
	return Competition;
};