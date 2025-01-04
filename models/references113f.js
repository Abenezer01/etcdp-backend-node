'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class References113F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  References113F.init({
    id: DataTypes.UUID,
    applicantinformation_id: DataTypes.UUID,
    reference_name: DataTypes.STRING,
    relationship: DataTypes.STRING,
    contact_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'References113F',
  });
  return References113F;
};