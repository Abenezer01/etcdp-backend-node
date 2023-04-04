"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hydroelectricdam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hydroelectricdam.init(
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
      river_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      elevation_from_sea_level: DataTypes.STRING,
      elevation_from_ngl: DataTypes.STRING,
      dam_type: DataTypes.STRING,
      dam_volume: DataTypes.STRING,
      gated_spillway_no: DataTypes.INTEGER,
      none_gated_spillway_no: DataTypes.INTEGER,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hydroelectricdam",
    }
  );
  return hydroelectricdam;
};
