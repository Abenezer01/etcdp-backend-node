'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderPosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderPosition.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    parent_id: {
      type: DataTypes.UUID
    },
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    stakeholder_department_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    required_education: DataTypes.STRING,
    required_work_experience: DataTypes.STRING,
    salary: DataTypes.DOUBLE,
    no_of_professionals: DataTypes.INTEGER,
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reference: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize,
    modelName: 'StakeholderPosition',
    tableName: 'StakeholderPositions'
  });
  return StakeholderPosition;
};