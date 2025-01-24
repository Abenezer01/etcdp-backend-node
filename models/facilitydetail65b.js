'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FacilityDetail65B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FacilityDetail65B.init({
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
    annual_generation: DataTypes.DOUBLE,
    units_number: DataTypes.INTEGER,
    owner_operator: DataTypes.STRING,
    commissioning_date: DataTypes.DATE,
    plant_life: DataTypes.INTEGER
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'FacilityDetail65B',
      tableName: 'FacilityDetail65Bs',
  });
  return FacilityDetail65B;
};