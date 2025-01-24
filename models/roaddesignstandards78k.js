'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoadDesignStandards78K extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoadDesignStandards78K.init({
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
    item: DataTypes.STRING,
    design_criteria: DataTypes.STRING,
    specification: DataTypes.STRING,
    unit: DataTypes.STRING,
    minimum: DataTypes.INTEGER,
    maximum: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'RoadDesignStandards78K',
      tableName: 'RoadDesignStandards78Ks',
  });
  return RoadDesignStandards78K;
};