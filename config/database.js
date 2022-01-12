const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "heroku_a54bb0d9f1dc9dc",
  "b338956cd2e9d8",
  "4e6580c7",
  {
    host: "eu-cdbr-west-02.cleardb.net",
    dialect: "mysql",
  }
);
// const sequelize = new Sequelize("database", "root", "1234", {
//   host: "localhost",
//   dialect: "mysql",
// });

// test database

(async () => {
  await sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
