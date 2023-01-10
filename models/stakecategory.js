'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stakecategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    stakecategory.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        referencedocumentId: DataTypes.UUID,
        stakeholdertypeId: DataTypes.UUID,
        revision_no: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'stakecategory',
    });
    stakecategory.associate = function(models) {
        // associations can be defined here
        stakecategory.hasMany(models.stakesubcategory, {
            foreignKey: 'stakecategoryId',
            as: 'stakesubcategories',
        });
    }
    return stakecategory;
};