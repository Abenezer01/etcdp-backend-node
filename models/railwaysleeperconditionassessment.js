'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwaySleeperConditionAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RailwaySleeperConditionAssessment.init({
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
    inspection_dates: DataTypes.DATE,
    sleeper_condition_rating: DataTypes.STRING,
    defect_presence: DataTypes.STRING,
    sleeper_stability_and_alignment: DataTypes.STRING,
    sleepers_required_number: DataTypes.INTEGER,
    supplier_name: DataTypes.STRING,
    supplier_phone: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwaySleeperConditionAssessment',
    tableName: 'RailwaySleeperConditionAssessments',
  });
  return RailwaySleeperConditionAssessment;
};