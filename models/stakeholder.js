'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stakeholder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }



    stakeholder.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        department_id: DataTypes.UUID,
        stakeholdertype_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        stakecategory_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        stakesubcategory_id: DataTypes.UUID,
        trade_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownership_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        businessfield_id: DataTypes.UUID,
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        operation_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        revision_no: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'stakeholder',
    });
    return stakeholder;
}