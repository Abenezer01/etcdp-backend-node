'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoreholeData92D1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BoreholeData92D1.init({
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
    is_productive: DataTypes.BOOLEAN,
    non_productive_reason: DataTypes.STRING,
    well_purpose: DataTypes.STRING,
    well_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoreholeData92D1',
  });
  return BoreholeData92D1;
};