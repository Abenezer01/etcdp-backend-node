'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Responder127B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Responder127B.init({
    research_innovation_work_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    position_role: DataTypes.STRING,
    organization_name: DataTypes.STRING,
    department: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    research_address_id: DataTypes.UUID
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'Responder127B',
      tableName: 'Responder127Bs',
  });
  return Responder127B;
};