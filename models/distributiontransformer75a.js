'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DistributionTransformer75A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DistributionTransformer75A.init({
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
    facility_type: DataTypes.STRING,
    product_brand_model: DataTypes.STRING,
    service_area: DataTypes.STRING,
    year_of_installation: DataTypes.DATE,
    total_number_of_transformers: DataTypes.INTEGER,
    fire_extinguishing_technology: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DistributionTransformer75A',
  });
  return DistributionTransformer75A;
};