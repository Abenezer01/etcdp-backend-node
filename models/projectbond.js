'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projectbond extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    projectbond.init({
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
        type: DataTypes.STRING,
        issue_date: DataTypes.DATE,
        expiration_date: DataTypes.DATE,
        issuing_institute: DataTypes.STRING,
        institute_branch: DataTypes.STRING,
        branch_address: DataTypes.STRING,
        phone: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        remark: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'projectbond',
    });
    return projectbond;
};