'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DrillingInformation92D2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DrillingInformation92D2.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    borehold_id: DataTypes.UUID,
    drilled_depth: DataTypes.DOUBLE,
    normal_drilling_diameter: DataTypes.DOUBLE,
    telescopic_upper_drilling_depth: DataTypes.DOUBLE,
    lower_drilling_diameter: DataTypes.DOUBLE,
    casing_material: DataTypes.STRING,
    normal_casing_diameter: DataTypes.DOUBLE,
    telescopic_casing_diameter: DataTypes.DOUBLE,
    casing_depth: DataTypes.DOUBLE,
    total_screen_length: DataTypes.DOUBLE,
    length_of_blind_casing: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'DrillingInformation92D2',
      tableName: 'DrillingInformation92D2s',
  });
  return DrillingInformation92D2;
};