"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models*/) {
      // define association here
    }
  }
  JobExperience.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      department: DataTypes.STRING,
      position: DataTypes.STRING,
      task_description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: "JobExperience",
      tableName: "JobExperiences"
    }
  );
  return JobExperience;
};
