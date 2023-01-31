'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projecttype extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    projecttype.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER,

        file_id: DataTypes.UUID,
    }, {
        sequelize,
        modelName: 'projecttype',
    });
    projecttype.associate = function(models) {
        // associations can be defined here
        projecttype.hasMany(models.projectcategory, {
            foreignKey: 'projecttype_id',
            as: 'Projectcategories',

        }, );
        models.projectcategory.associate = function(models) {
            // associations can be defined here
            projectcategory.hasMany(models.projectsubcategory, {
                foreignKey: 'category_id',
                as: 'Projectsubcategories',
            });
        }
    }
    return projecttype;
};