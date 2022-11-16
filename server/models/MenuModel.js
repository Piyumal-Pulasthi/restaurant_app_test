import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Dish from "../models/DishModel.js";

const { DataTypes } = Sequelize;

const Menu = db.define(
  "menus",
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING,
    },
    restaurantId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

Menu.hasMany(Dish);

export default Menu;
