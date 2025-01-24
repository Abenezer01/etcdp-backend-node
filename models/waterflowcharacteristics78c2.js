'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaterFlowCharacteristics78C2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaterFlowCharacteristics78C2.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    water_depth: DataTypes.DOUBLE,
    flow_rate: DataTypes.DOUBLE,
    debris_buildup: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'WaterFlowCharacteristics78C2',
      tableName: 'WaterFlowCharacteristics78C2s',
  });
  return WaterFlowCharacteristics78C2;
};