'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roadinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roadinfo.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    material: DataTypes.STRING,
    location_function: DataTypes.TEXT,
    traffic_volume: DataTypes.DOUBLE,
    traffic_type: DataTypes.STRING,
    economy: DataTypes.STRING,
    rigidity: DataTypes.STRING,
    topography: DataTypes.STRING,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roadinfo',
  });
  return roadinfo;
};