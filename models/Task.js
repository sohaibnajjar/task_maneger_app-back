const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Status = require("./Status");
class Task extends Model {}

Task.init(
  {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // summary: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // assignee: { type: DataTypes.STRING },
    // Reporter: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: "tasks",
  }
);
Task.belongsTo(Status);

module.exports = Task;
