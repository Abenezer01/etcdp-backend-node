'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('employeeeducations', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'employeeeducations',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            stakeholder_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'stakeholders',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            year: {
                type: Sequelize.DATE,
                allowNull: false
            },
            domain: {
                type: Sequelize.STRING,
                allowNull: false
            },
            department_name: {
                type: Sequelize.STRING
            },
            nationality: {
                type: Sequelize.STRING,
                allowNull: false
            },
            male: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            female: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            studylevel_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'studylevels',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false
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
        await queryInterface.dropTable('employeeeducations');
    }
};