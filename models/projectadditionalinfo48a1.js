'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectAdditionalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectAdditionalInfo.init({
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
    project_status: DataTypes.STRING,
    reason: DataTypes.STRING,
    work_accident_number: DataTypes.INTEGER
  }, {

    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,
    modelName: 'ProjectAdditionalInfo',
    tableName: "ProjectAdditionalInfos"
  });
  return ProjectAdditionalInfo;
};