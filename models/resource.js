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
        item_specification: DataTypes.UUID,
        measurement_unit: DataTypes.DOUBLE,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'resource',
    });
    return resource;
};