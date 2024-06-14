"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ActionState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActionState.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      model_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      position_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      time: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "ActionState",
      tableName: "actionstates",

      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );

  ActionState.associate = function (models) {
    ActionState.belongsTo(models.Position, {
      foreignKey: "position_id",
    });
  };
  return ActionState;
};
