'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MajorInspection79B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MajorInspection79B.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    structural_defect: DataTypes.STRING,
    damage_type: DataTypes.STRING,
    damage_quantity: DataTypes.STRING,
    hydraulic_defect: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MajorInspection79B',
  });
  return MajorInspection79B;
};