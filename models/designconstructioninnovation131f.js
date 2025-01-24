'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DesignConstructionInnovation131F extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DesignConstructionInnovation131F.init({
    project_related_research_id: DataTypes.UUID,
    digital_fabrication: DataTypes.TEXT,
    additive_manufacturing: DataTypes.TEXT,
    biomimicry_in_design: DataTypes.TEXT,
    resilient_infrastructure: DataTypes.TEXT
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'DesignConstructionInnovation131F',
      tableName: 'DesignConstructionInnovation131Fs',
  });
  return DesignConstructionInnovation131F;
};