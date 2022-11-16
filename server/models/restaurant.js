'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    open_time: DataTypes.STRING,
    close_time: DataTypes.STRING,
    delivery_charge: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};