'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstitutionAddress111D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InstitutionAddress111D.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    model_id: DataTypes.STRING,
    region: DataTypes.STRING,
    zone: DataTypes.STRING,
    woreda: DataTypes.STRING,
    city: DataTypes.STRING,
    kebele: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    contact_person: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'InstitutionAddress111D',
      tableName: 'InstitutionAddress111Ds',
  });
  return InstitutionAddress111D;
};