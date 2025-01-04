'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BridgeType81C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BridgeType81C.init({
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
    length: DataTypes.DOUBLE,
    height: DataTypes.DOUBLE,
    width: DataTypes.DOUBLE,
    current_condition: DataTypes.STRING,
    weight_limit: DataTypes.DOUBLE,
    design_lifespan: DataTypes.INTEGER,
    inspection_frequency: DataTypes.INTEGER,
    percent_completed: DataTypes.DOUBLE,
    year_of_construction: DataTypes.INTEGER,
    maintenance_record: DataTypes.STRING,
    photograph: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BridgeType81C',
  });
  return BridgeType81C;
};