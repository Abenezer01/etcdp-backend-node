'use strict';
const uuid = require('uuid');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let pass = 'adminpass';
        let salt = bcrypt.genSalt(10);
        let hash = await bcrypt.hash(pass, parseInt(salt))
        return queryInterface.bulkInsert('users', [{
            id: uuid.v4(),
            first_name: 'Abebe',
            middle_name: 'Bekele',
            last_name: 'Kefeyalew',
            email: 'abebe@gmail.com',
            phone: '+2519121212',
            gender: 'male',
            marital_status: 0,
            partner_name: 'Birhanu',
            password: hash,
            birth_date: '12-12-12',
            position_id: '357005da-ce3a-4f2f-b4cc-43dafd7495e8',
            address_id: "01a7ecd6-e0d9-4741-be8d-0c0fe181b259",
            revision_no: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', { email: 'abebe@gmail.com' }, {});
    }
};