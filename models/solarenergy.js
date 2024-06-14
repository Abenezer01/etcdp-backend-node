"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SolarEnergy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SolarEnergy.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      project_id: DataTypes.UUID,
      model_id: DataTypes.UUID,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      specifications: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "SolarEnergy",
      tableName: "solarenergies"
    }
  );
  return SolarEnergy;
};
