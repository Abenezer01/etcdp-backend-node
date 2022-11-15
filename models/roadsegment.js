'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roadsegment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roadsegment.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specifications: DataTypes.TEXT,
    length: DataTypes.DOUBLE,
    width: DataTypes.DOUBLE,
    remark: DataTypes.TEXT,
    start_northing: DataTypes.DOUBLE,
    start_easting: DataTypes.DOUBLE,
    end_northing: DataTypes.DOUBLE,
    end_easting: DataTypes.DOUBLE,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roadsegment',
  });
  return roadsegment;
};