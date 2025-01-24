'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DistributionTransformerType75B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DistributionTransformerType75B.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    transformer_type: DataTypes.STRING,
    type_of_cooling: DataTypes.STRING,
    transformer_power_rating: DataTypes.DOUBLE,
    life_time: DataTypes.INTEGER,
    protection_installed: DataTypes.STRING,
    safety_problems_encountered: DataTypes.STRING,
    number_of_work_accidents: DataTypes.INTEGER,
    on_site_safety_regulation_measures_implemented: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'DistributionTransformerType75B',
      tableName: 'DistributionTransformerType75Bs',
  });
  return DistributionTransformerType75B;
};