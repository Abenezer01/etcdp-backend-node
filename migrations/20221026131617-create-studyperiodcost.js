'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('studyperiodcosts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'studyperiodcosts',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            higher_institute_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'stakeholders', //stakeholder registered as higher institute type
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            studyfield_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'studyfields',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            study_program: {
                type: Sequelize.STRING,
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
            study_period: {
                type: Sequelize.DATE,
                allowNull: false
            },
            study_cost: {
                type: Sequelize.DOUBLE,
                allowNull: false
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
        await queryInterface.dropTable('studyperiodcosts');
    }
};