'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('document', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            parent_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'document',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            documenttype_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'documenttypes',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            documentcategory_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'documentcategories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            documentsubcategory_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'documentsubcategories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT
            },
            author: {
                type: Sequelize.STRING
            },
            edition: {
                type: Sequelize.STRING
            },
            publication_date: {
                type: Sequelize.DATE
            },
            isbn: {
                type: Sequelize.INTEGER
            },
            copy_right_notice: {
                type: Sequelize.STRING
            },
            attachement: {
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
        await queryInterface.dropTable('document');
    }
};