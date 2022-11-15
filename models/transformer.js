'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transformer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transformer.init({
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
    transformertype_id: {
      type: DataTypes.UUID,
       allowNull:false
    },
    specifications: DataTypes.TEXT,
    input_current: DataTypes.STRING,
    input_voltage: DataTypes.STRING,
    output_current: DataTypes.STRING,
    output_voltage: DataTypes.STRING,
    northing: DataTypes.DOUBLE,
    easting: DataTypes.DOUBLE,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transformer',
  });
  return transformer;
};