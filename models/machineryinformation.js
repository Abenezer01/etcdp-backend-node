'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MachineryInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MachineryInformation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    department_id: DataTypes.UUID,
    type: DataTypes.STRING,
    plate_no: DataTypes.STRING,
    owner_name: DataTypes.STRING,
    engine_no: DataTypes.STRING,
    serial_no: DataTypes.STRING,
    title_certificate_no: DataTypes.STRING,
    registration_date: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    capacity: DataTypes.STRING,
    engine_power_hp: DataTypes.STRING,
    manufacture_year: DataTypes.STRING,
    file_no: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    woreda: DataTypes.STRING,
    kebele: DataTypes.STRING,
    po_box: DataTypes.STRING,
    tell: DataTypes.STRING,
    ts_no: DataTypes.STRING,
    date: DataTypes.STRING,
    duty: DataTypes.STRING,
    data: DataTypes.STRING,
    remark: DataTypes.TEXT,
    edesate: DataTypes.STRING,
    eged: DataTypes.STRING,
    eged_d: DataTypes.STRING,
    eged_n: DataTypes.STRING,
    bir_amount: DataTypes.STRING,
    bank_b: DataTypes.STRING,
    tin_number: DataTypes.STRING,
    field1: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'MachineryInformation',
    tableName: 'MachineryInformations',
  });
  return MachineryInformation;
};