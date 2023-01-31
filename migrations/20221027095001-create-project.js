'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('projects', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'projects',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            projectcategory_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'projectcategories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            projectsubcategory_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'projectsubcategories',
                    key: 'id'
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            remark: {
                type: Sequelize.TEXT
            },
            contract_no: {
                type: Sequelize.STRING
            },
            budget_code: {
                type: Sequelize.STRING
            },
            procurement_no: {
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
        await queryInterface.dropTable('projects');
    }
};