"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResourceStudyField extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResourceStudyField.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      studyfield_id: DataTypes.UUID,
      resource_id: DataTypes.UUID,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ResourceStudyField",
      tableName: "resourcestudyfields"
    }
  );
  ResourceStudyField.associate = function (models) {
    ResourceStudyField.belongsTo(models.StudyField, {
      as: "studyfield",
      foreignKey: "studyfield_id",
    });
  };
  return ResourceStudyField;
};
