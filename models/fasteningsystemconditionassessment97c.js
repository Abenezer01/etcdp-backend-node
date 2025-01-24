'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FasteningSystemConditionAssessment97C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FasteningSystemConditionAssessment97C.init({
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
    inspection_dates: DataTypes.DATE,
    condition_rating: DataTypes.STRING,
    presence_of_defects: DataTypes.TEXT,
    system_stability_alignment: DataTypes.STRING,
    rail_fastening_model_number: DataTypes.STRING,
    quantity_needed: DataTypes.INTEGER,
    expected_lifespan: DataTypes.INTEGER,
    cost_of_fastening: DataTypes.DOUBLE,
    availability_of_fastening: DataTypes.BOOLEAN
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FasteningSystemConditionAssessment97C',
      tableName: 'FasteningSystemConditionAssessment97Cs',
  });
  return FasteningSystemConditionAssessment97C;
};