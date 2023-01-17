'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class graduates extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    graduates.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        higher_institute_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        studyfield_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        description: DataTypes.TEXT,
        study_program: {
            type: DataTypes.STRING,
            allowNull: false
        },
        studylevel_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        study_period: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        agelevel_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'graduates',
    });
    return graduates;
};