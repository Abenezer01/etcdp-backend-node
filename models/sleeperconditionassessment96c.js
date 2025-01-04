'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SleeperConditionAssessment96C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SleeperConditionAssessment96C.init({
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
    inspection_date: DataTypes.DATE,
    sleeper_length: DataTypes.STRING,
    sleeper_condition_rating: DataTypes.TEXT,
    presence_of_defects: DataTypes.STRING,
    sleeper_stability_alignment: DataTypes.STRING,
    number_of_sleepers_required: DataTypes.INTEGER,
    supplier_name: DataTypes.STRING,
    supplier_contact_info: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    installation_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SleeperConditionAssessment96C',
  });
  return SleeperConditionAssessment96C;
};