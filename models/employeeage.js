'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class employeeage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    employeeage.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        stakeholder_id: {
            type: DataTypes.UUID,
            allowNull: false
        },

        stakeholder_id: {
            type: DataTypes.UUID
        },
        year: {
            type: DataTypes.DATE,
            allowNull: false
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        male: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        female: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        agelevel_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        revision_no: {
            type: DataTypes.INTEGER
        },
        file_id: {
            type: DataTypes.UUID
        },
    }, {
        sequelize,
        modelName: 'employeeage',
    });
    employeeage.associate = function(models) {
        employeeage.belongsTo(models.agelevel, {
            as: "agelevel",
            foreignKey: "agelevel_id"
        })

    };
    return employeeage;
};