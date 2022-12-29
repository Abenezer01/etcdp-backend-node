'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class position extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    position.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        department_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        is_head: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        quantity_needed: DataTypes.INTEGER,
        role_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'position',
    });
    return position;
};