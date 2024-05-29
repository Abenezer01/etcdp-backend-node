"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ProjectVariation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProjectVariation.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        parent_id: DataTypes.UUID,
        project_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        type: DataTypes.STRING,
        approval_date: DataTypes.DATE,
        justification: DataTypes.TEXT,
        amount: DataTypes.INTEGER,
        extension_time: DataTypes.INTEGER,
        extension_time_id: DataTypes.UUID,
        remark: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "ProjectVariation",
        tableName: "projectvariations"
    });
    return ProjectVariation;
};