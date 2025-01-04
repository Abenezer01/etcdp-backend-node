'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TreatmentComponent89D3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TreatmentComponent89D3.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    water_supply_id: DataTypes.UUID,
    treatment_components: DataTypes.STRING,
    disinfection_method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TreatmentComponent89D3',
  });
  return TreatmentComponent89D3;
};