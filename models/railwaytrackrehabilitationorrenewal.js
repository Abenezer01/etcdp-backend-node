'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailwayTrackRehabilitationOrRenewal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RailwayTrackRehabilitationOrRenewal.belongsTo(models.ProjectMasterData, {
        foreignKey: 'rehabilitation_renewal_methods_used_id',
        as: 'rehabilitationRenewalMethodsUsed'
      });
    }
  }
  RailwayTrackRehabilitationOrRenewal.init({
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
    track_renewal_history: DataTypes.TEXT,
    plans_or_schedules: DataTypes.TEXT,
    rehabilitation_renewal_methods_used_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    rehabilitation_renewal_types: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RailwayTrackRehabilitationOrRenewal',
    tableName: 'RailwayTrackRehabilitationOrRenewals',
  });
  return RailwayTrackRehabilitationOrRenewal;
};