const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "heroku_ee51471cb1e049d",
  "bfc57ecb4b5abe",
  "e11f507b",
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
