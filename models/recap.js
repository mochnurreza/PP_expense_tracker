'use strict';
const {
  Model
} = require('sequelize');
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
  }
  Recap.init({
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recap',
  });
  return Recap;
};