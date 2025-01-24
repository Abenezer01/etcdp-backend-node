'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BallastCharacteristics95B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BallastCharacteristics95B.init({
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
    ballast_type: DataTypes.STRING,
    particle_size_distribution: DataTypes.STRING,
    quantity_used: DataTypes.DOUBLE,
    ballast_material_type: DataTypes.STRING,
    ballast_source: DataTypes.STRING,
    ballast_material_size: DataTypes.STRING,
    ballast_layer_thickness: DataTypes.DOUBLE,
    compaction_method: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'BallastCharacteristics95B',
      tableName: 'BallastCharacteristics95Bs'
  });
  return BallastCharacteristics95B;
};