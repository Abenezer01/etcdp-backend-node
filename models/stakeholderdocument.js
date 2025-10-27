'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StakeholderDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StakeholderDocument.init({
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
    document_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    author: DataTypes.STRING,
    edition: DataTypes.STRING,
    publication_date: DataTypes.DATE,
    isbn: DataTypes.STRING,
    copy_right_notice: DataTypes.STRING
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at" ,     
    sequelize,
    modelName: 'StakeholderDocument',
    tableName: 'StakeholderDocuments',
  });
  return StakeholderDocument;
};