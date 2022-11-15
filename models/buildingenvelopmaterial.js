'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buildingenvelopmaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buildingenvelopmaterial.init({
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
    exterior_wall: DataTypes.STRING,
    roof_assembly: DataTypes.STRING,
    exterior_windows: DataTypes.STRING,
    exterior_walls: DataTypes.STRING,
    shading_components: DataTypes.STRING,
    remark: DataTypes.TEXT,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buildingenvelopmaterial',
  });
  return buildingenvelopmaterial;
};