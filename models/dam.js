'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dam.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dam_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dam_height: DataTypes.DOUBLE,
    spillway_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    penstock_length: DataTypes.DOUBLE,
    turbine_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    turbine_number: DataTypes.INTEGER,
    generator_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    generator_number: DataTypes.INTEGER,
    national_priority_rank: DataTypes.INTEGER,
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'Dam',
    tableName: 'Dams',
  });
  return Dam;
};