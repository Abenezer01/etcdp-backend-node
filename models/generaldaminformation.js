'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralDamInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralDamInformation.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    river_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dam_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dam_purpose_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dam_height: DataTypes.DOUBLE,
    crest_length: DataTypes.DOUBLE,
    crest_width: DataTypes.DOUBLE,
    freeboard: DataTypes.DOUBLE
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'GeneralDamInformation',
    tableName: 'GeneralDamInformations',
  });
  return GeneralDamInformation;
};