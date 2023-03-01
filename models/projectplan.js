'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projectplan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    projectplan.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        parent_id: {
            type: DataTypes.UUID
        },
        project_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: null
        },
        project_expense: DataTypes.DOUBLE,
        manpower: DataTypes.DOUBLE,
        direct_labour: DataTypes.DOUBLE,
        indirect_labour: DataTypes.DOUBLE,
        material: DataTypes.DOUBLE,
        machinery: DataTypes.DOUBLE,
        other_expense: DataTypes.DOUBLE,
        sub_contractor_cost: DataTypes.DOUBLE,
        financial_performance: DataTypes.DOUBLE,
        physical_performance: DataTypes.DOUBLE,
        cost_due_to_rework: DataTypes.DOUBLE,
        over_head_cost: DataTypes.DOUBLE,
        year: DataTypes.STRING,
        month: DataTypes.STRING,
        start: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end: {
            type: DataTypes.DATE,
            // allowNull: false
        },
        profit: {
            type: DataTypes.DOUBLE
        },
        profit_or_loss: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.financial_performance - (this.project_expense == null ? this.projectexpense : this.project_expense);
            },

        },
        projectexpense: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.sub_total_expense + (this.sub_total_expense * (this.over_head_cost / 100))
            },

        },
        sub_total_expense: {
            type: DataTypes.VIRTUAL,
            get() {
                return (this.manpower == null ? (this.direct_labour + this.indirect_labour) : this.manpower) + this.machinery + this.material + this.other_expense + this.sub_contractor_cost;
            },

        },
    }, {
        sequelize,
        modelName: 'projectplan',
    });
    return projectplan;
};