'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrackConditionAssessment94D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrackConditionAssessment94D.init({
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
    inspection_dates: DataTypes.STRING,
    condition_rating: DataTypes.STRING,
    observed_defects: DataTypes.STRING,
    track_settlement: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TrackConditionAssessment94D',
      tableName: 'TrackConditionAssessment94Ds',
  });
  return TrackConditionAssessment94D;
};