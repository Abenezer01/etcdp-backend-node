"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here

      // Role.belongsTo(models.Position, {
      //   as: "role",
      //   foreignKey: "role_id",
      // });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      // department_id: {
      //     type: DataTypes.UUID,
      //     allowNull: false
      // },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      is_deactivatable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      } 
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "Role",
      tableName: "roles"
    }
  );
  return Role;
};
