'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransformerType75B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransformerType75B.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parent_id: DataTypes.UUID,
    distributiontransformer_id: DataTypes.STRING,
    transformer_type: DataTypes.STRING,
    type_of_cooling: DataTypes.STRING,
    transformer_power_rating: DataTypes.DOUBLE,
    lifetime: DataTypes.INTEGER,
    protection_installed: DataTypes.STRING
  }, {
    createdAt: "created_at",
      updatedAt: "updated_at" ,     
      sequelize,
      modelName: 'TransformerType75B',
      tableName: 'TransformerType75Bs',
  });
  return TransformerType75B;
};