'use strict';
const {
  Model
} = require('sequelize');
const date = require('../helper');
module.exports = (sequelize, DataTypes) => {
  class Recap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recap.belongsTo(models.User, {foreignKey: 'UserId'})
      Recap.hasMany(models.Category, {foreignKey: 'RecapId'})
    }
    get formattedDate() {
      return date(this.createdAt)
    }
  }
  Recap.init({
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    type: DataTypes.STRING,
    Description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recap',
  });
  return Recap;
};