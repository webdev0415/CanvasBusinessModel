'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Placeholder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Placeholder.belongsTo(models.Canvas, {
      //   foreignKey: 'canvasId',
      //   onDelete: 'CASCADE'
      // })
    }
  };
  Placeholder.init({
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    lock: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER,
    coordinate_x: DataTypes.INTEGER,
    coordinate_y: DataTypes.INTEGER,
    canvas_id: DataTypes.INTEGER,
    color: DataTypes.STRING,
    size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Placeholder',
  });
  return Placeholder;
};