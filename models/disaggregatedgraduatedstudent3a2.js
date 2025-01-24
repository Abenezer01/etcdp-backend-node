'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DisaggregatedGraduatedStudent3A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DisaggregatedGraduatedStudent3A2.init({
    stakeholder_id: DataTypes.STRING,
    study_level_id: DataTypes.STRING,
    study_program_id: DataTypes.STRING,
    study_field_id: DataTypes.STRING,
    age_group_id: DataTypes.STRING,
    male: DataTypes.STRING,
    female: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'DisaggregatedGraduatedStudent3A2',
      tableName: 'DisaggregatedGraduatedStudent3A2s',
  });
  return DisaggregatedGraduatedStudent3A2;
};