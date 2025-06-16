'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayBallastDrainageAndWaterManagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwayBallastDrainageAndWaterManagement.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    railway_line_section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drainage_condition_assessment: DataTypes.STRING,
    drainage_infrastructure_type: DataTypes.STRING,
    water_management_measures: DataTypes.TEXT,
    drainage_infrastructure_length: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayBallastDrainageAndWaterManagement',
    tableName: 'RailwayBallastDrainageAndWaterManagements',
  });
  return RailwayBallastDrainageAndWaterManagement;
};