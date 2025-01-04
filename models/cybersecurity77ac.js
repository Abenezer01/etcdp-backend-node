'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CyberSecurity77AC extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CyberSecurity77AC.init({
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
    measures_implemented: DataTypes.BOOLEAN,
    measures_type: DataTypes.STRING,
    audit_frequency: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CyberSecurity77AC',
  });
  return CyberSecurity77AC;
};