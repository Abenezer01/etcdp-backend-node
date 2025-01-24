'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DistributionLineInfrastructure74C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DistributionLineInfrastructure74C.init({
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
    type_of_distribution_line: DataTypes.STRING,
    material_of_distribution_line: DataTypes.STRING,
    conductor_size_of_distribution_line: DataTypes.DOUBLE,
    voltage_level: DataTypes.DOUBLE,
    topology: DataTypes.STRING,
    switching_station_connection: DataTypes.BOOLEAN,
    name_of_switching_station: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'DistributionLineInfrastructure74C',
      tableName: 'DistributionLineInfrastructure74Cs',
  });
  return DistributionLineInfrastructure74C;
};