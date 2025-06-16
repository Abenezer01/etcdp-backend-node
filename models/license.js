'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class License extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  License.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    stakeholder_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    license_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_scope: {
      type: DataTypes.STRING,
      allowNull: false
    },
    licensing_body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    remark: DataTypes.TEXT
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,
    sequelize,
    modelName: 'License',
  });
  return License;
};