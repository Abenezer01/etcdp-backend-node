'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('projectplans', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'projectplans',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            project_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'projects',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            start: {
                type: Sequelize.DATE
            },
            end: {
                type: Sequelize.DATE
            },
            type: {
                type: Sequelize.STRING,
                allowNull: null
            },
            project_expense: Sequelize.DOUBLE,
            manpower: Sequelize.DOUBLE,
            direct_labour: Sequelize.DOUBLE,
            indirect_labour: Sequelize.DOUBLE,
            material: Sequelize.DOUBLE,
            machinery: Sequelize.DOUBLE,
            other_expense: Sequelize.DOUBLE,
            sub_contractor_cost: Sequelize.DOUBLE,
            financial_performance: Sequelize.DOUBLE,
            physical_performance: Sequelize.DOUBLE,
            cost_due_to_rework: Sequelize.DOUBLE,
            over_head_cost: Sequelize.DOUBLE,
            year: Sequelize.STRING,
            month: Sequelize.STRING,
            start: {
                type: Sequelize.DATE,
                allowNull: false
            },
            end: {
                type: Sequelize.DATE,
                // allowNull: false
            },
            profit: {
                type: Sequelize.DOUBLE
            },
            remark: {
                type: Sequelize.TEXT
            },
            revision_no: {
                type: Sequelize.INTEGER
            },
            file_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'files',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'

            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('projectplans');
    }
};