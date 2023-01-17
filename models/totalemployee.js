'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class totalemployee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    totalemployee.init({
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
        year: {
            type: DataTypes.DATE,
            allowNull: false
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_name: DataTypes.UUID,
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        file_id: DataTypes.UUID,
        revision_no: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'totalemployee',
    });
    return totalemployee;
};