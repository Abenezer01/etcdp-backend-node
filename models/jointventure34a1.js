'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JointVenture34A1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JointVenture34A1.init({
    id: DataTypes.UUID,
    stakeholder_id: DataTypes.UUID,
    specialization: DataTypes.STRING,
    ownership_percentage: DataTypes.DOUBLE,
    competence_certificate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JointVenture34A1',
  });
  return JointVenture34A1;
};