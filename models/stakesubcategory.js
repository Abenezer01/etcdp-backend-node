'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stakesubcategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    stakesubcategory.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        stakecategoryId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        stakeholdertypeId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        file_id: DataTypes.UUID,
        revision_no: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'stakesubcategory',
    });
    // stakesubcategory.associate = function(models) {

    //     stakesubcategory.belongsTo(models.stakecategory)
    // };
    return stakesubcategory;
};