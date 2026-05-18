'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayCommunicationSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RailwayCommunicationSystem.belongsTo(models.ProjectMasterData, {
        foreignKey: "communication_system_type_id",
        as: "communicationSystemType",
      });
    }
  }
  RailwayCommunicationSystem.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    railway_line_section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    communication_system_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    communication_system_protocols_or_standards: DataTypes.STRING,
    communication_system_components: DataTypes.STRING,
    signaling_system_components: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayCommunicationSystem',
    tableName: 'RailwayCommunicationSystems',
  });
  return RailwayCommunicationSystem;
};