'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class resourceprice extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    resourceprice.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        resource_id: DataTypes.UUID,
        detailresourcetype_id: DataTypes.UUID,
        resourcebrand_id: DataTypes.UUID,
        unit_price: DataTypes.INTEGER,
        datasource: DataTypes.STRING,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'resourceprice',
    });
    resourceprice.associate = function(models) {
        resourceprice.belongsTo(models.detailresourcetype, {
            as: "resourcetype",
            foreignKey: "detailresourcetype_id"
        })
        resourceprice.belongsTo(models.resourcebrand, {
            as: "resourcebrand",
            foreignKey: "resourcebrand_id"
        })
    }
    return resourceprice;
};