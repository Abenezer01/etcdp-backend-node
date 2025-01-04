'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeTunnelIdentification103B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeTunnelIdentification103B.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    name: DataTypes.STRING,
    type_of_structure: DataTypes.STRING,
    length_of_structure: DataTypes.DOUBLE,
    height_of_structure: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'BridgeTunnelIdentification103B',
  });
  return BridgeTunnelIdentification103B;
};