'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class file extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    file.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        fileable_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: DataTypes.TEXT,
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
        extension: DataTypes.STRING,
        reference_id: DataTypes.UUID,
        revision_no: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'file',
    });
    return file;
};