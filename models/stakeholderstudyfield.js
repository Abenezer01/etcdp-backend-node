'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stakeholderstudyfield extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    stakeholderstudyfield.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: DataTypes.UUID,
        stakeholder_id: DataTypes.UUID,
        studyfield_id: DataTypes.UUID,
        studyprogram_id: DataTypes.UUID,
        studylevel_id: DataTypes.UUID,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'stakeholderstudyfield',
    });
    stakeholderstudyfield.associate = function(models) {

        stakeholderstudyfield.belongsTo(models.studyfield, {

            as: "studyfield",
            foreignKey: "studyfield_id",
            // constraints: false,
            // attribute: ['description', 'title']
        })
        stakeholderstudyfield.belongsTo(models.studyprogram, {

            as: "studyprogram",
            foreignKey: "studyprogram_id",
            // constraints: false,
            // attribute: ['description', 'title']
        })
        stakeholderstudyfield.belongsTo(models.studylevel, {

            as: "studylevel",
            foreignKey: "studylevel_id",
            // constraints: false,
            // attribute: ['description', 'title']
        })
    }
    return stakeholderstudyfield;
};