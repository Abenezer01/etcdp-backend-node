'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeasurmentUnit118B2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MeasurmentUnit118B2.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'MeasurmentUnit118B2',
      tableName: 'MeasurmentUnit118B2s',
  });
  return MeasurmentUnit118B2;
};