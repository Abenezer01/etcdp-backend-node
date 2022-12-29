'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rolepermissions', {

            role_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'roles',
                    key: 'id'
                },
            },
            permission_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'permissions',
                    key: 'id'
                },
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
        await queryInterface.dropTable('rolepermissions');
    }
};