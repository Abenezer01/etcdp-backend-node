'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingAddress105A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrainingAddress105A2.init({
    training_id: DataTypes.UUID,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    sub_city: DataTypes.STRING,
    woreda: DataTypes.STRING,
    kebele: DataTypes.STRING,
    venue: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    contact_person: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TrainingAddress105A2',
      tableName: 'TrainingAddress105A2s',
  });
  return TrainingAddress105A2;
};