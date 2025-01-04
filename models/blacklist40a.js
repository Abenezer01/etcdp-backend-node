'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlackList40A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BlackList40A.init({
    id: DataTypes.STRING,
    stakeholder_id: DataTypes.STRING,
    balck_listed_tin: DataTypes.STRING,
    reason: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    blacklisting_authorized_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BlackList40A',
  });
  return BlackList40A;
};