'use strict';
const uuid = require('uuid');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let pass = 'adminpass';
        let salt = bcrypt.genSalt(10);
        let hash = await bcrypt.hash(pass, parseInt(salt))
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
        //Role seed
        await queryInterface.bulkInsert('roles', [{
            name: 'admin',
            description: 'admin description',
            department_id: departmentRows[0].id,
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'admin',
            description: 'authorize description',
            department_id: departmentRows[0].id,
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

        const roleRows = roles[0];
        // const roleRowss = roles[0];
        console.log("The roles", roleRows[0].name)

        //Department seed

        //Position seed
        await queryInterface.bulkInsert('positions', [{
            name: 'admin position',
            description: 'admin position description',
            is_head: false,
            department_id: departmentRows[0].id,
            role_id: roleRows[0].id,
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
            avatar: '',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

        const photos = await queryInterface.sequelize.query(
            `SELECT id from photos;`
        );
        const photoRows = photos[0];
        await queryInterface.bulkInsert('users', [{
            id: uuid.v4(),
            first_name: 'Abebe',
            middle_name: 'Birhanu',
            last_name: 'Belete',
            gender: 'male',
            marital_status: 0,
            partner_name: 'Birhanu',
            password: hash,
            birth_date: '12-12-12',
            photo_id: photoRows[0].id,
            revision_no: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
        const users = await queryInterface.sequelize.query(
            `SELECT id from users;`
        );

        const userRows = users[0];
        await queryInterface.bulkInsert('useremails', [{
            id: uuid.v4(),
            email: 'abebe@gmail.com',
            user_id: userRows[0].id,
            is_primary: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
        await queryInterface.bulkInsert('userphones', [{
            id: uuid.v4(),
            phone: '+25191212122',
            user_id: userRows[0].id,
            is_primary: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
        await queryInterface.bulkInsert('userpositions', [{
            id: uuid.v4(),
            position_id: positionRows[0].id,
            user_id: userRows[0].id,
            department_id: departmentRows[0].id,
            is_primary: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }])


        //Address seed
        await queryInterface.bulkInsert('addresses', [{
            model_id: userRows[0].id,
            country: 'Ethiopia',
            region: 'Addis Ababa',
            city: 'Addis Ababa',
            subcity: 'Arada',
            street: 'St13',
            block_number: 'Sr1212',
            house_number: 'Sr1313',
            easting: 12.2,
            northing: 12.3,
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
        // await queryInterface.bulkInsert('stakeholdertypes', [{
        //     title: "Consultant",
        //     description: "",
        //     id: uuid.v4(),
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // }]);
        await queryInterface.bulkInsert('ownerships', [{
            title: "Gov",
            description: "This is gov description",
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
        await queryInterface.bulkInsert('businessfields', [{
            title: "Business1",
            description: "This is business1",
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
        await queryInterface.bulkInsert('studylevels', [{
            title: "Study level1",
            description: "Study level1 description",
            id: uuid.v4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
        // await queryInterface.bulkInsert('studyfields', [{
        //     title: "Science",
        //     description: "Study field description",
        //     id: uuid.v4(),
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // }]);
        await queryInterface.bulkInsert('agelevels', [{
                title: "< 25",
                description: "",
                id: uuid.v4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "25-35",
                description: "",
                id: uuid.v4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "35-45",
                description: "",
                id: uuid.v4(),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                title: "45-55",
                description: "",
                id: uuid.v4(),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                title: "55-65",
                description: "",
                id: uuid.v4(),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                title: "> 65",
                description: "",
                id: uuid.v4(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        await queryInterface.bulkInsert('experiencelevels', [{
            title: "Work experience 1",
            description: "Work experience 1 description",
            id: uuid.v4(),
            createdAt: new Date(),
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