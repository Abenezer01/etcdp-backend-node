'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubstationLayoutAndCommunicationData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubstationLayoutAndCommunicationData.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    substation_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    substation_layout: DataTypes.STRING,
    equipped_with_standby_diesel_generator: DataTypes.STRING,
    substation_busbar_type: DataTypes.STRING,
    substation_communication_system_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    scada_system: DataTypes.BOOLEAN,
    substation_grounding_system_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    substation_altitude_level: DataTypes.DOUBLE,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'SubstationLayoutAndCommunicationData',
    tableName: 'SubstationLayoutAndCommunicationData',
  });
  return SubstationLayoutAndCommunicationData;
};