import { Sequelize } from "sequelize";

const db = new Sequelize("restaurant_app", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
