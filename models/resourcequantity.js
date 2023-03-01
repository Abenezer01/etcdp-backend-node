'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class resourcequantity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    resourcequantity.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        resource_id: DataTypes.UUID,
        detailresourcetype_id: DataTypes.UUID,
        resourcebrand_id: DataTypes.UUID,
        quantity: DataTypes.INTEGER,
        datasource: DataTypes.STRING,
        revision_no: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'resourcequantity',
    });
    resourcequantity.associate = function(models) {
        resourcequantity.belongsTo(models.detailresourcetype, {
            as: "resourcetype",
            foreignKey: "detailresourcetype_id"
        })
        resourcequantity.belongsTo(models.resourcebrand, {
            as: "resourcebrand",
            foreignKey: "resourcebrand_id"
        })
    }
    return resourcequantity;
};