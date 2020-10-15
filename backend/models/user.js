'use strict';
const bcrypt = require("bcryptjs");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    validPassword (inputPassword) {
      return bcrypt.compareSync(inputPassword, this.password)
    }
  };
  User.init({
    googleId: DataTypes.STRING,
    password: DataTypes.STRING,
    useremail: DataTypes.STRING,
    confirm: DataTypes.BOOLEAN,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};