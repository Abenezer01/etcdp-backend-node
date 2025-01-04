"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ElectricTower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ElectricTower.belongsTo(models.TransmissionLine, {
        foreignKey: "transmissionline_id",
      });
    }
  }
  ElectricTower.init(
    {
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
      transmissionline_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      overall_length: DataTypes.DOUBLE,
      embedded_length: DataTypes.DOUBLE,
      columns: DataTypes.STRING,
      braces: DataTypes.STRING,
      beam_cross_arms: DataTypes.STRING,
      brace_cross_arm: DataTypes.STRING,
      elasticity_modulus: DataTypes.STRING,
      poission_ratio: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "ElectricTower",
      tableName: "electrictowers"
    }
  );
  return ElectricTower;
};
