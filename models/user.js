'use strict';
const {
    Model
} = require('sequelize');
const { decrypt, encrypt } = require('../utils/helper');

module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    user.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                const encryptedValue = this.getDataValue("first_name");
                const decryptedValue = decrypt(encryptedValue);
                return decryptedValue;
              },
            set(value) {
                const encryptedValue = encrypt(value);
                this.setDataValue('first_name', encryptedValue);
              }
        },
        middle_name: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                const encryptedValue = this.getDataValue("middle_name");
                const decryptedValue = decrypt(encryptedValue);
                return decryptedValue;
              },
            set(value) {
                const encryptedValue = encrypt(value);
                this.setDataValue('middle_name', encryptedValue);
              }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                const encryptedValue = this.getDataValue("last_name");
                const decryptedValue = decrypt(encryptedValue);
                return decryptedValue;
              },
            set(value) {
                const encryptedValue = encrypt(value);
                this.setDataValue('last_name', encryptedValue);
              }
        },
        password: DataTypes.STRING,
        gender: DataTypes.STRING,
        marital_status: DataTypes.BOOLEAN,
        partner_name:  DataTypes.STRING,
        birth_date: DataTypes.DATE,
        refresh_token: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER,
        full_name: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.first_name+" "+ this.middle_name;
            },

        },

    }, {
        sequelize,
        modelName: 'user',
    }, );

    user.associate = function(models) {

        // associations can be defined here
        user.hasMany(models.actionstate, {
            foreignKey: 'model_id',
            as: 'users',
        });
        user.hasMany(models.userposition, {
            foreignKey: 'user_id',
            as: 'positions',
        });

    };

    return user;
};