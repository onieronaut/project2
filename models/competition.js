module.exports = function (sequelize, DataTypes) {
	const Competition = sequelize.define("Competition", {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		date: DataTypes.STRING,
		location: DataTypes.STRING,
		description: DataTypes.TEXT,
		group: DataTypes.STRING

	});
	return Competition;
};