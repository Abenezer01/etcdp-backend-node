'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrackCharacteristic94B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrackCharacteristic94B.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    track_type: DataTypes.STRING,
    track_gauge: DataTypes.STRING,
    track_length: DataTypes.DOUBLE,
    rail_type_and_size: DataTypes.STRING,
    sleeper_type: DataTypes.STRING,
    sleeper_spacing: DataTypes.DOUBLE,
    fastening_systems: DataTypes.STRING,
    ballast_type: DataTypes.STRING,
    ballast_depth: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TrackCharacteristic94B',
      tableName: 'TrackCharacteristic94Bs',
  });
  return TrackCharacteristic94B;
};