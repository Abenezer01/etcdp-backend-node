'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QualityControl78F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QualityControl78F.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    project_id: DataTypes.STRING,
    inspection_type: DataTypes.STRING,
    inspection_result: DataTypes.STRING,
    defects_or_issues_identified: DataTypes.TEXT,
    corrective_actions_taken: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'QualityControl78F',
      tableName: 'QualityControl78Fs',
  });
  return QualityControl78F;
};