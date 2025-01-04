'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommunicationSystem98C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommunicationSystem98C.init({
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
    system_type: DataTypes.STRING,
    system_protocol: DataTypes.STRING,
    system_component: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommunicationSystem98C',
  });
  return CommunicationSystem98C;
};