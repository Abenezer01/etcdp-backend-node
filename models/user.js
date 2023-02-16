'use strict';
const {
    Model
} = require('sequelize');
const bcrypt = require('bcrypt');

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
            allowNull: false
        },
        middle_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: DataTypes.STRING,
        phone: {
            type: DataTypes.STRING,
            unique: true,
            allow: false
        },
        gender: DataTypes.STRING,
        marital_status: DataTypes.BOOLEAN,
        partner_name: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        position_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        refresh_token: DataTypes.STRING,
        photo_id: DataTypes.UUID,
        revision_no: DataTypes.INTEGER,

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
        user.belongsTo(models.position, {
            as: "position",
            foreignKey: "position_id"
        })
        user.belongsTo(models.photo, {
            as: "photo",
            foreignKey: "photo_id"
        })


    };

    return user;
};