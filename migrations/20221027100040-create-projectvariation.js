'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('projectvariations', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'projectvariations',
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
            type: {
                type: Sequelize.STRING
            },
            period_start: {
                type: Sequelize.DATE,
                allowNull: false
            },
            period_end: {
                type: Sequelize.DATE,
                allowNull: false
            },
            justification: {
                type: Sequelize.TEXT
            },
            remark: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('projectvariations');
    }
};