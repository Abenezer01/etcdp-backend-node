'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectDetail44A2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectDetail44A2.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    function: DataTypes.STRING,
    building_height: DataTypes.DOUBLE,
    building_story: DataTypes.INTEGER,
    builtup_area: DataTypes.DOUBLE,
    project_delivery_method: DataTypes.STRING,
    project_contract_type: DataTypes.STRING,
    total_house_units: DataTypes.INTEGER,
    total_stuff_number: DataTypes.INTEGER,
    similar_block_number: DataTypes.INTEGER,
    total_functional_units: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'ProjectDetail44A2',
      tableName: 'ProjectDetail44A2s',
  });
  return ProjectDetail44A2;
};