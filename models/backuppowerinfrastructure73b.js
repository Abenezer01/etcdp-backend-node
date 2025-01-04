'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BackupPowerInfrastructure73B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BackupPowerInfrastructure73B.init({
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
    type_of_system: DataTypes.STRING,
    output_voltage: DataTypes.DOUBLE,
    model_number: DataTypes.STRING,
    size: DataTypes.INTEGER,
    expected_annual_generation: DataTypes.DOUBLE,
    fuel_type: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    unit_commitment_rank: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BackupPowerInfrastructure73B',
  });
  return BackupPowerInfrastructure73B;
};