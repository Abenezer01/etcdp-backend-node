"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class projectfinance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectfinance.init(
    {
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
      main_contract_price_amount: DataTypes.DOUBLE,
      rebate: DataTypes.DOUBLE,
      remark: DataTypes.TEXT,
      revision_no: DataTypes.INTEGER,
      price_after_rebate: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.main_contract_price_amount - (this.main_contract_price_amount*(this.rebate/100));
        },
        
      },
    },
    {
      sequelize,
      modelName: "projectfinance",
    }
  );
  return projectfinance;
};
