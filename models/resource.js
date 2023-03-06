'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class resource extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            resource.belongsTo(models.image, {
                foreignKey: 'image_id',
            });
            resource.belongsTo(models.resourcetype, {
                as: "resourcetype",
                foreignKey: "resourcetype_id"
            })
            resource.belongsTo(models.resourcecategory, {
                as: "resourcecategory",
                foreignKey: "resourcecategory_id"
            })
            resource.belongsTo(models.resourcesubcategory, {
                as: "resourcesubcategory",
                foreignKey: "resourcesubcategory_id"
            })


        }
    }
    resource.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        resourcetype_id: DataTypes.UUID,
        resourcecategory_id: DataTypes.UUID,
        resourcesubcategory_id: DataTypes.UUID,
        measurement_unit: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        image_id: DataTypes.UUID,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'resource',
    });
    // resource.associate = function(models) {
    //     // resource.belongsTo(models.address, {
    //     //     as: "address",
    //     //     foreignKey: "address_id"
    //     // })

    // }
    return resource;
};