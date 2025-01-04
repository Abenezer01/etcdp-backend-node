'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrumentation87D6 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Instrumentation87D6.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    dam_id: DataTypes.UUID,
    dam_instrumentation_available: DataTypes.BOOLEAN,
    gallery_available: DataTypes.BOOLEAN,
    bottom_outlet_available: DataTypes.BOOLEAN,
    meteorological_data_collection_available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Instrumentation87D6',
  });
  return Instrumentation87D6;
};