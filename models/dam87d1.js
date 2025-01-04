'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dam87D1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dam87D1.init({
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
    dam_type: DataTypes.STRING,
    purpose: DataTypes.STRING,
    height: DataTypes.DOUBLE,
    crest_length: DataTypes.DOUBLE,
    crest_width: DataTypes.DOUBLE,
    freeboard: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Dam87D1',
  });
  return Dam87D1;
};