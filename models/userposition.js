"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPosition.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: {
        type: DataTypes.UUID,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      department_id: {
        type: DataTypes.UUID,
      },
      position_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "UserPosition",
    }
  );

  UserPosition.associate = function (models) {
    UserPosition.belongsTo(models.position, {
      foreignKey: "position_id",
    });
    UserPosition.belongsTo(models.department, {
      foreignKey: "department_id",
    });
  };
  return UserPosition;
};
