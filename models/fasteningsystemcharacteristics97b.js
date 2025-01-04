'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FasteningSystemCharacteristics97B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FasteningSystemCharacteristics97B.init({
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
    fastening_system_type: DataTypes.STRING,
    manufacturer_or_supplier: DataTypes.STRING,
    fastening_system_specifications: DataTypes.TEXT,
    rail_clips_details: DataTypes.TEXT,
    bolts_nuts_specifications: DataTypes.TEXT,
    other_fastening_system_components: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FasteningSystemCharacteristics97B',
  });
  return FasteningSystemCharacteristics97B;
};