'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectParticipated38C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectParticipated38C.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    stakeholder_id: DataTypes.STRING,
    project_type: DataTypes.STRING,
    country: DataTypes.STRING,
    start_date: DataTypes.DATE,
    completion_date: DataTypes.DATE,
    amount: DataTypes.DOUBLE,
    current_status: DataTypes.STRING,
    reason: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectParticipated38C',
      tableName: 'ProjectParticipated38Cs',
  });
  return ProjectParticipated38C;
};