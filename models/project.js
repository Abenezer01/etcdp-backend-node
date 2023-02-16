'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    project.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        projectcategory_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        projecttype_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        projectsubcategory_id: DataTypes.UUID,
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        remark: DataTypes.TEXT,
        contract_no: DataTypes.STRING,
        budget_code: DataTypes.STRING,
        procurement_no: DataTypes.STRING,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'project',
    });
    return project;
};