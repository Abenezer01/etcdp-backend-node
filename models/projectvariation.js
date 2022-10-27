'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectvariation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectvariation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.UUID,
    type: DataTypes.STRING,
    period_start: DataTypes.DATE,
    period_end: DataTypes.DATE,
    justification: DataTypes.TEXT,
    remark: DataTypes.TEXT,
    revision_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projectvariation',
  });
  return projectvariation;
};