'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoadAndCargoSpecification99H extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoadAndCargoSpecification99H.init({
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
    load_capacity: DataTypes.DOUBLE,
    weight_limit: DataTypes.DOUBLE,
    cargo_restriction: DataTypes.STRING,
    coupling_uncoupling_procedures: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'LoadAndCargoSpecification99H',
  });
  return LoadAndCargoSpecification99H;
};