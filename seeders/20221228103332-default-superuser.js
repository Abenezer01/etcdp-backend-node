'use strict';
const uuid = require('uuid');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let pass = 'adminpass';
        let salt = bcrypt.genSalt(10);
        let hash = await bcrypt.hash(pass, parseInt(salt))
            //Role seed
        await queryInterface.bulkInsert('roles', [{
            name: 'admin',
            description: 'admin description',
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'authorize',
            description: 'authorize description',
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
        // await queryInterface.bulkInsert('users', [{
        //     id: uuid.v4(),
        //     first_name: 'Abebe',
        //     middle_name: 'Birhanu',
        //     last_name: 'Belete',
        //     email: 'Kaleb@gmail.com',
        //     phone: '+25191212122',
        //     gender: 'male',
        //     marital_status: 0,
        //     partner_name: 'Birhanu',
        //     password: hash,
        //     birth_date: '12-12-12',
        //     position_id: positionRows[0].id,
        //     address_id: addressRows[0].id,
        //     photo_id: photoRows[0].id,
        //     revision_no: 0,
        //     createdAt: "12-12-12",
        //     updatedAt: new Date()
        // }]);
        const roles = await queryInterface.sequelize.query(
            `SELECT id from roles;`
        );

        const roleRows = roles[1];
        //Department seed
        await queryInterface.bulkInsert('departments', [{
            name: 'Software',
            description: 'Software test description',
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Electrical',
            description: 'Elec test description',
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

        const departments = await queryInterface.sequelize.query(
            `SELECT id from departments;`
        );
        const departmentRows = departments[0];
        //Position seed
        await queryInterface.bulkInsert('positions', [{
            name: 'admin position',
            description: 'admin position description',
            is_head: false,
            department_id: departmentRows[0].id,
            role_id: roleRows[1].id,
            quantity_needed: 1,
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

        const positions = await queryInterface.sequelize.query(
            `SELECT id from positions;`
        );

        const positionRows = positions[0];
        //Photo seed
        await queryInterface.bulkInsert('photos', [{
            id: uuid.v4(),
            avatar: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/assets/avatar-s-11.9d32c98c.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

        const photos = await queryInterface.sequelize.query(
            `SELECT id from photos;`
        );
        const photoRows = photos[0];
        //Address seed
        await queryInterface.bulkInsert('addresses', [{
            model_id: 'f368f1fc-86da-11ed-a1eb-0242ac120002',
            country: 'Ethiopia',
            region: 'Addis Ababa',
            city: 'Addis Ababa',
            subcity: 'Arada',
            street: 'St13',
            block_number: 'Sr1212',
            house_number: 'Sr1313',
            easting: 12.2,
            northing: 12.3,
            longitude: 12,
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

        const addresses = await queryInterface.sequelize.query(
            `SELECT id from addresses;`
        );

        const addressRows = addresses[0];
        await queryInterface.bulkInsert('users', [{
            id: uuid.v4(),
            first_name: 'Abebe',
            middle_name: 'Birhanu',
            last_name: 'Belete',
            email: 'abebe@gmail.com',
            phone: '+25191212122',
            gender: 'male',
            marital_status: 0,
            partner_name: 'Birhanu',
            password: hash,
            birth_date: '12-12-12',
            position_id: positionRows[0].id,
            address_id: addressRows[0].id,
            photo_id: photoRows[0].id,
            revision_no: 0,
            createdAt: "12-12-12",
            updatedAt: new Date()
        }]);
    },
    down: async(queryInterface) => {
        await queryInterface.bulkDelete('users', null, {});
        await queryInterface.bulkDelete('positions', null, {});
        await queryInterface.bulkDelete('addresses', null, {});
        await queryInterface.bulkDelete('photos', null, {});
        await queryInterface.bulkDelete('departments', null, {});
        await queryInterface.bulkDelete('roles', null, {});
    }

};