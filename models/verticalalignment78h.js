'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VerticalAlignment78H extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VerticalAlignment78H.init({
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
    max_grade: DataTypes.DOUBLE,
    min_grade: DataTypes.DOUBLE,
    vertical_curve_length: DataTypes.DOUBLE,
    crest_curve_length: DataTypes.DOUBLE,
    sag_curve_length: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'VerticalAlignment78H',
      tableName: 'VerticalAlignment78Hs',
  });
  return VerticalAlignment78H;
};