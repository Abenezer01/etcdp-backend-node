'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RiverTrainingTechnicalInformation93D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RiverTrainingTechnicalInformation93D.init({
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
    peak_flow_of_river: DataTypes.DOUBLE,
    flood_inundation_area: DataTypes.DOUBLE,
    types_of_river_training_work: DataTypes.STRING,
    category_of_training_works: DataTypes.STRING,
    total_length_of_training_works: DataTypes.DOUBLE,
    original_river_bank_level: DataTypes.DOUBLE,
    bank_level_after_protection_work: DataTypes.DOUBLE,
    material_for_embankment: DataTypes.STRING,
    status_of_scheme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RiverTrainingTechnicalInformation93D',
  });
  return RiverTrainingTechnicalInformation93D;
};