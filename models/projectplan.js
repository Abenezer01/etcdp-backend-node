'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projectplan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    projectplan.init({
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
        period_start: DataTypes.DATE,
        period_end: DataTypes.DATE,
        financial: DataTypes.DOUBLE,
        physical: DataTypes.DOUBLE,
        over_head: DataTypes.DOUBLE,
        expense: DataTypes.DOUBLE,
        subtotal: DataTypes.DOUBLE,
        is_planned: DataTypes.BOOLEAN,
        remark: DataTypes.TEXT,
        file_id: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'projectplan',
    });
    return projectplan;
};