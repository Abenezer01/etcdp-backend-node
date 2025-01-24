'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EndorsementSupports110D extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EndorsementSupports110D.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    funding_sources: DataTypes.STRING,
    professional_associations: DataTypes.STRING,
    collaborations: DataTypes.STRING,
    government_support: DataTypes.STRING,
    industry_partnerships: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'EndorsementSupports110D',
      tableName: 'EndorsementSupports110Ds',
  });
  return EndorsementSupports110D;
};