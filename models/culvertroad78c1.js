'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CulvertRoad78C1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CulvertRoad78C1.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    location: DataTypes.STRING,
    culvert_diameter: DataTypes.DOUBLE,
    culvert_length: DataTypes.DOUBLE,
    culvert_height: DataTypes.DOUBLE,
    material: DataTypes.STRING,
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CulvertRoad78C1',
  });
  return CulvertRoad78C1;
};