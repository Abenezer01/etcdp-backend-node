'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DistributionLineInformation74B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DistributionLineInformation74B.init({
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
    capacity: DataTypes.DOUBLE,
    year_of_installation: DataTypes.DATE,
    date_of_commissioning: DataTypes.DATE,
    total_length_of_distribution_lines: DataTypes.DOUBLE,
    life_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DistributionLineInformation74B',
  });
  return DistributionLineInformation74B;
};