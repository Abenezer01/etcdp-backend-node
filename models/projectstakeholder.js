"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectStakeholder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectStakeholder.hasMany(models.stakeholder, {
        foreignKey: "stakeholder_id",
      });
      ProjectStakeholder.hasMany(models.project, {
        foreignKey: "project_id",
      });
    }
  }
  ProjectStakeholder.init(
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
      stakeholder_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      remark: DataTypes.STRING,
      revision_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProjectStakeholder",
    }
  );
  ProjectStakeholder.associate = function (models) {
    // ProjectStakeholder.belongsTo(models.address, {
    //     as: "address",
    //     foreignKey: "address_id"
    // })
    ProjectStakeholder.belongsTo(models.stakeholder, {
      as: "stakeholder",
      foreignKey: "stakeholder_id",
    });
  };
  return ProjectStakeholder;
};
