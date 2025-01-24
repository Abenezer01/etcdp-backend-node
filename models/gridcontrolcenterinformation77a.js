'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GridControlCenterInformation77A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GridControlCenterInformation77A.init({
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
    year_of_installation: DataTypes.DATE,
    time: DataTypes.TEXT,
    main_features: DataTypes.STRING,
    control_system_type: DataTypes.STRING,
    communication_links: DataTypes.STRING,
    ems_capability: DataTypes.BOOLEAN,
    remote_control_capability: DataTypes.BOOLEAN,
    average_measured_data_reliability: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'GridControlCenterInformation77A',
      tableName: 'GridControlCenterInformation77As',
  });
  return GridControlCenterInformation77A;
};