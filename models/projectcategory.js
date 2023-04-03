'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projectcategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    projectcategory.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        projecttype_id: DataTypes.UUID,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'projectcategory',
    });
    projectcategory.associate = function(models) {
        // associations can be defined here
        projectcategory.hasMany(models.projectsubcategory, {
            foreignKey: 'projectcategory_id',
            as: 'Projectsubcategories',
        });
    }
    return projectcategory;
};