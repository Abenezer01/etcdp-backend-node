'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralBallastData95A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralBallastData95A.init({
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
    name_of_railway_ballast: DataTypes.STRING,
    finance_modality: DataTypes.STRING,
    type_of_railway_track_ballast: DataTypes.STRING,
    purchase_cost: DataTypes.DOUBLE,
    ballast_source: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GeneralBallastData95A',
  });
  return GeneralBallastData95A;
};