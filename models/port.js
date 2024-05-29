"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Port extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Port.init(
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
      owner: DataTypes.STRING,
      operator: DataTypes.STRING,
      port_type: DataTypes.STRING,
      site_area: DataTypes.DOUBLE,
      annual_traffic_size: DataTypes.DOUBLE,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Port",
      tableName: "ports"
    }
  );
  return Port;
};
