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
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    applicationform_id: DataTypes.STRING,
    desired_credit_amount: DataTypes.DOUBLE,
    proposed_lease_term: DataTypes.INTEGER,
    purpose_of_credit: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'CreditFacilityDetail112A3',
      tableName: 'CreditFacilityDetail112A3s',
  });
  return CreditFacilityDetail112A3;
};