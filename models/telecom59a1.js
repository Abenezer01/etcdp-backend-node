'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telecom59A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Telecom59A1.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    name: DataTypes.STRING,
    specification: DataTypes.STRING,
    coverage_area: DataTypes.DOUBLE,
    families_coverage_number: DataTypes.INTEGER,
    service_period: DataTypes.DATE,
    inauguration_date: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Telecom59A1',
      tableName: 'Telecom59A1s',
  });
  return Telecom59A1;
};