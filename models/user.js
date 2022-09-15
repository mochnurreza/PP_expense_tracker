'use strict';
const {
  Model
} = require('sequelize');
const bycrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Recap, {foreignKey: 'UserId'})
      User.hasOne(models.Profile, {foreignKey: 'UserId'})
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, option) => {
    const salt = bycrypt.genSaltSync(10)
    const hash = bycrypt.hashSync(instance.password, salt)
    instance.password = hash
  })
  return User;
};