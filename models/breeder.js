module.exports = function (sequelize, DataTypes) {
	const Breeder = sequelize.define("Breeder", {
		kennelName: DataTypes.STRING,
		email: DataTypes.STRING,
		breedType: DataTypes.STRING,
		missionStatement: DataTypes.TEXT,
		upcomingLitters: DataTypes.BOOLEAN,
		litterDate: DataTypes.STRING,
		group: DataTypes.STRING
	});
	return Breeder;
};