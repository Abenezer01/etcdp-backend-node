'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectTime45C2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectTime45C2.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    contract_start_date: DataTypes.DATE,
    contract_end_date: DataTypes.DATE,
    time_elapsed: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ProjectTime45C2',
  });
  return ProjectTime45C2;
};