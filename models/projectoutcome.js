'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectOutcome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectOutcome.init({
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
    construction_type: DataTypes.STRING,
    function: DataTypes.STRING,
    lesson_learned: DataTypes.TEXT
  }, {

    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,
    modelName: 'ProjectOutcome',
    tableName: "ProjectOutcomes"
  }
  );
  return ProjectOutcome;
};