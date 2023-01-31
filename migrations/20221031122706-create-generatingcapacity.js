'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('generatingcapacities', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'generatingcapacities',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            operator: {
                type: Sequelize.STRING
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
            commission_date: {
                type: Sequelize.DATE
            },
            turbine_type_number: {
                type: Sequelize.INTEGER
            },
            designed_capacity: {
                type: Sequelize.STRING
            },
            installed_capacity: {
                type: Sequelize.STRING
            },
            generating_capacity: {
                type: Sequelize.STRING
            },
            capacity_factor: {
                type: Sequelize.STRING
            },
            annual_generation: {
                type: Sequelize.STRING
            },
            revision_no: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('generatingcapacities');
    }
};