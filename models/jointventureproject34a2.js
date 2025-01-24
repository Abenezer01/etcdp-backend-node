'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JointVentureProject34A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JointVentureProject34A2.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    budget: DataTypes.DOUBLE,
    scope_of_work: DataTypes.TEXT,
    timeline: DataTypes.DATE
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'JointVentureProject34A2',
      tableName: 'JointVentureProject34A2s',
  });
  return JointVentureProject34A2;
};