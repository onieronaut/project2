module.exports = function (sequelize, DataTypes) {
	const Breeder = sequelize.define("Breeder", {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		breed: DataTypes.STRING,
		mission: DataTypes.TEXT,
		litters: DataTypes.BOOLEAN,
		litterDate: DataTypes.STRING,
		group: DataTypes.STRING
	});
	return Breeder;
};


