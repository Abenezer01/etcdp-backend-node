'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Runway104D2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Runway104D2.init({
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
    port_id: DataTypes.UUID,
    length: DataTypes.STRING,
    surface_type: DataTypes.STRING,
    longitudinal_gradients: DataTypes.NUMERIC,
    transverse_gradients: DataTypes.NUMERIC,
    approach_degree: DataTypes.STRING,
    clear_zone: DataTypes.STRING,
    apron_surface_type: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Runway104D2',
      tableName: 'Runway104D2s',
  });
  return Runway104D2;
};