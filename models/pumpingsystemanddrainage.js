'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PumpingSystemAndDrainage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PumpingSystemAndDrainage.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    parent_id: DataTypes.UUID,
    general_dam_information_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    canal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pumps_number: DataTypes.INTEGER,
    booster_pumps_number: DataTypes.INTEGER,
    pump_type_id:{
      type: DataTypes.UUID,
      allowNull: false,
    },
    pumps_power_source_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    drainage_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_drainage_canal_length: DataTypes.DOUBLE,
    scheme_status_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'PumpingSystemAndDrainage',
    tableName: 'PumpingSystemAndDrainages',
  });
  return PumpingSystemAndDrainage;
};