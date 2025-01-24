'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConstructionInput118B3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConstructionInput118B3.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    input_type_id: DataTypes.UUID,
    measurment_unit_id: DataTypes.UUID,
    quantity: DataTypes.DOUBLE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ConstructionInput118B3',
      tableName: 'ConstructionInput118B3s'
  });
  return ConstructionInput118B3;
};