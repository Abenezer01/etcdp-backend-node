'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreditFacilityDetail112A3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CreditFacilityDetail112A3.init({
    id: DataTypes.STRING,
    applicationform_id: DataTypes.STRING,
    desired_credit_amount: DataTypes.DOUBLE,
    proposed_lease_term: DataTypes.INTEGER,
    purpose_of_credit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CreditFacilityDetail112A3',
  });
  return CreditFacilityDetail112A3;
};