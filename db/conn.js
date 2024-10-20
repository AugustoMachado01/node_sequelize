const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "augustomachado01", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("conectamos com sucesso o sequelize");
} catch (error) {
  console.log("Não foi possivel conectar", error);
}

module.exports = sequelize;
