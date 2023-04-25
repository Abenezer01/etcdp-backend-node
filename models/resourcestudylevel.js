"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class resourcestudylevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resourcestudylevel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      studylevel_id: DataTypes.UUID,
      resource_id: DataTypes.UUID,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "resourcestudylevel",
    }
  );
  resourcestudylevel.associate = function (models) {
    resourcestudylevel.belongsTo(models.studylevel, {
      as: "studylevel",
      foreignKey: "studylevel_id",
    });
  };
  return resourcestudylevel;
};
