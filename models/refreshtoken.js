'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RefreshToken.belongsTo(models.User, {
            foreignKey: 'user_id', // This field will be added to the RefreshToken table
            as: 'user',
            onDelete: 'CASCADE' // If the user is deleted, delete the tokens
        });
    }
  }
  RefreshToken.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    token: {
        // Store the unique random token string
        type: DataTypes.STRING(256), 
        allowNull: false,
        unique: true
    },
    expiry_date: {
        // Store the actual date the token should expire
        type: DataTypes.DATE,
        allowNull: false
    },
    user_id: DataTypes.UUID
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'RefreshToken',
    tableName: 'RefreshTokens'
  });
  return RefreshToken;
};