'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projectdocument extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    projectdocument.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        project_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        file_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'projectdocument',
    });
    return projectdocument;
};