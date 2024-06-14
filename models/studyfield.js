"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudyField extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudyField.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      parent_id: DataTypes.UUID,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      study_program_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      studylevel_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      revision_no: DataTypes.INTEGER,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at' ,     
      sequelize,
      modelName: "StudyField",
      tableName: "studyfields"
    }
  );
  StudyField.associate = function (models) {
    // StudyField.belongsTo(models.address, {
    //     as: "address",
    //     foreignKey: "address_id"
    // })
    StudyField.belongsTo(models.StudyProgram, {
      as: "studyprogram",
      foreignKey: "study_program_id",
    });
    StudyField.belongsTo(models.StudyProgram, {
      as: "studylevel",
      foreignKey: "studylevel_id",
    });
  };

  return StudyField;
};
