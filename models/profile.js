'use strict';
const {
  Model
} = require('sequelize');
const { options } = require('../router');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, {foreignKey: 'UserId'})
    }
    get formattedMoney() {
      const uang = `Rp. ${this.money}` 
      return uang
    }
    
  }
  Profile.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    money: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  Profile.beforeCreate((app, options) => {
    app.money = 0
  })
  return Profile;
};