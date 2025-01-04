'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SleeperCharacteristics96B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SleeperCharacteristics96B.init({
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
    sleeper_type: DataTypes.STRING,
    sleeper_length: DataTypes.DOUBLE,
    sleeper_width: DataTypes.DOUBLE,
    sleeper_height: DataTypes.DOUBLE,
    spacing_between_sleepers: DataTypes.DOUBLE,
    distance_between_pairs: DataTypes.DOUBLE,
    sleeper_material_specifications: DataTypes.STRING,
    sleeper_spacing_center_to_center: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'SleeperCharacteristics96B',
  });
  return SleeperCharacteristics96B;
};