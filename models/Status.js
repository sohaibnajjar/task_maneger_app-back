const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Status extends Model {}

Status.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "status",
  }
);

module.exports = Status;
