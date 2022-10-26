'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  training.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    title: DataTypes.STRING,
    training: DataTypes.STRING,
    description: DataTypes.TEXT,
    provider: DataTypes.STRING,
    provision_date: DataTypes.DATE,
    revision_no: DataTypes.INTEGER,
    revision_no: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'training',
  });
  return training;
};