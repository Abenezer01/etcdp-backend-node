'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderEmployeeData26D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderEmployeeData26D.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.UUID,
    type: DataTypes.STRING,
    male: DataTypes.INTEGER,
    female: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'StakeholderEmployeeData26D',
      tableName: 'StakeholderEmployeeData26Ds',
  });
  return StakeholderEmployeeData26D;
};