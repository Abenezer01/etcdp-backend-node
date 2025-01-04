'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionMethod82B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionMethod82B.init({
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
    excavation_method: DataTypes.STRING,
    grading_method: DataTypes.STRING,
    drainage_system_installation: DataTypes.STRING,
    pavement_construction_method: DataTypes.STRING,
    surface_treatment_method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ConstructionMethod82B',
  });
  return ConstructionMethod82B;
};