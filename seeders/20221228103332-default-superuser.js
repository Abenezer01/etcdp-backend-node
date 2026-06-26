"use strict";
const uuid = require("uuid");
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Setup Password Hashing safely using async-await
    const pass = "adminpass";
    const hash = await bcrypt.hash(pass, 10);
    const EMAIL_ADDRESS = "ecdmsadmin@gmail.com"

    // 2. Generate UUIDs for all required relations beforehand to maintain integrity
    const addressDept1Id = uuid.v4();
    const addressDept2Id = uuid.v4();
    const addressUserId = uuid.v4();

    const softwareDeptId = uuid.v4();
    const electricalDeptId = uuid.v4();
    
    const adminRoleId = uuid.v4();
    const authorizeRoleId = uuid.v4();
    
    const adminPositionId = uuid.v4();
    const photoId = uuid.v4();
    const userId = uuid.v4();

    // 3. Define Real System Permissions Mapping to 1space_ecdms.sql Core Entity Tables
    const permissionSeeds = [
      // Users Table Permissions
      { id: uuid.v4(), name: "create_users", description: "Create user accounts", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "read_users", description: "Read user accounts", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "update_users", description: "Update user accounts", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "delete_users", description: "Delete user accounts", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      
      // Roles Table Permissions
      { id: uuid.v4(), name: "create_roles", description: "Create configuration roles", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "read_roles", description: "Read configuration roles", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "update_roles", description: "Update configuration roles", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "delete_roles", description: "Delete configuration roles", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      
      // Departments Table Permissions
      { id: uuid.v4(), name: "create_departments", description: "Create departments", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "read_departments", description: "Read departments", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "update_departments", description: "Update departments", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "delete_departments", description: "Delete departments", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      
      // Positions Table Permissions
      { id: uuid.v4(), name: "create_positions", description: "Create positions", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "read_positions", description: "Read positions", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "update_positions", description: "Update positions", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "delete_positions", description: "Delete positions", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      
      // Projects Table Permissions
      { id: uuid.v4(), name: "create_projects", description: "Create engineering projects", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "read_projects", description: "Read engineering projects", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "update_projects", description: "Update engineering projects", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "delete_projects", description: "Delete engineering projects", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      
      // Bridges Table Permissions
      { id: uuid.v4(), name: "create_bridges", description: "Create bridge records", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "read_bridges", description: "Read bridge records", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "update_bridges", description: "Update bridge records", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), name: "delete_bridges", description: "Delete bridge records", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ];

    // 4. Populate Addresses Table (Required before departments & users can reference them)
    await queryInterface.bulkInsert("addresses", [
      {
        id: addressDept1Id,
        model_id: softwareDeptId,
        country: "Ethiopia",
        region: "Addis Ababa",
        city: "Addis Ababa",
        subcity: "Arada",
        street: "St13",
        block_number: "Sr1212",
        house_number: "Sr1313",
        easting: 12.2,
        northing: 12.3,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: addressDept2Id,
        model_id: electricalDeptId,
        country: "Ethiopia",
        region: "Addis Ababa",
        city: "Addis Ababa",
        subcity: "Bole",
        street: "St15",
        block_number: "Sr999",
        house_number: "Sr888",
        easting: 12.4,
        northing: 12.5,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: addressUserId,
        model_id: userId,
        country: "Ethiopia",
        region: "Addis Ababa",
        city: "Addis Ababa",
        subcity: "Yeka",
        street: "St04",
        block_number: "B2",
        house_number: "H105",
        easting: 12.1,
        northing: 12.2,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    // 5. Populate Departments Table (Linking to correct Address IDs)
    await queryInterface.bulkInsert("departments", [
      {
        id: softwareDeptId,
        name: "Software",
        description: "Software test description",
        address_id: addressDept1Id,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: electricalDeptId,
        name: "Electrical",
        description: "Elec test description",
        address_id: addressDept2Id,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 6. Populate Roles Table (Dependent on Departments)
    await queryInterface.bulkInsert("roles", [
      {
        id: adminRoleId,
        name: "admin",
        description: "admin description",
        department_id: softwareDeptId,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: authorizeRoleId,
        name: "admin",
        description: "authorize description",
        department_id: softwareDeptId,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 7. Populate Real Permissions Table
    await queryInterface.bulkInsert("permissions", permissionSeeds);

    // 8. Associate all permissions with the Administrator role in RolePermissions mapping table
    const rolePermissionSeeds = permissionSeeds.map((perm) => ({
      id: uuid.v4(),
      role_id: adminRoleId,
      permission_id: perm.id,
      created_at: new Date(),
      updated_at: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("rolepermissions", rolePermissionSeeds);

    // 9. Populate Positions Table (Dependent on Departments and Roles)
    await queryInterface.bulkInsert("positions", [
      {
        id: adminPositionId,
        name: "admin position",
        description: "admin position description",
        is_head: false,
        department_id: softwareDeptId,
        role_id: adminRoleId,
        quantity_needed: 1,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 10. Populate Photos Table
    await queryInterface.bulkInsert("photos", [
      {
        id: photoId,
        avatar: "",
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 11. Populate Users Table (Dependent on Photos)
    await queryInterface.bulkInsert("users", [
      {
        id: userId,
        first_name: "Abebe",
        middle_name: "Birhanu",
        last_name: "Belete",
        gender: "male",
        marital_status: 0,
        partner_name: "Birhanu",
        password: hash,
        birth_date: "1992-12-12",
        photo_id: photoId,
        revision_no: 0,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 12. Populate Pivot/Mapping Tables (Dependent on Users, Departments, and Positions)
    await queryInterface.bulkInsert("useremails", [
      {
        id: uuid.v4(),
        email: EMAIL_ADDRESS,
        user_id: userId,
        is_primary: true,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("userphones", [
      {
        id: uuid.v4(),
        phone: "+25191212122",
        user_id: userId,
        is_primary: true,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("userpositions", [
      {
        id: uuid.v4(),
        position_id: adminPositionId,
        user_id: userId,
        department_id: softwareDeptId,
        is_primary: true,
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 13. Populate Core Application MasterData Tables
    await queryInterface.bulkInsert("ownerships", [
      {
        id: uuid.v4(),
        title: "Gov",
        description: "This is gov description",
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("businessfields", [
      {
        id: uuid.v4(),
        title: "Business1",
        description: "This is business1",
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("studylevels", [
      {
        id: uuid.v4(),
        title: "Study level1",
        description: "Study level1 description",
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("agelevels", [
      { id: uuid.v4(), title: "< 25", description: "", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), title: "25-35", description: "", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), title: "35-45", description: "", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), title: "45-55", description: "", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), title: "55-65", description: "", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { id: uuid.v4(), title: "> 65", description: "", created_at: new Date(), updated_at: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert("experiencelevels", [
      {
        id: uuid.v4(),
        title: "Work experience 1",
        description: "Work experience 1 description",
        created_at: new Date(),
        updated_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    // Deletions are ordered strictly in reverse to prevent FK constraint crashes
    await queryInterface.bulkDelete("experiencelevels", null, {});
    await queryInterface.bulkDelete("agelevels", null, {});
    await queryInterface.bulkDelete("studylevels", null, {});
    await queryInterface.bulkDelete("businessfields", null, {});
    await queryInterface.bulkDelete("ownerships", null, {});
    await queryInterface.bulkDelete("userpositions", null, {});
    await queryInterface.bulkDelete("userphones", null, {});
    await queryInterface.bulkDelete("useremails", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("photos", null, {});
    await queryInterface.bulkDelete("positions", null, {});
    await queryInterface.bulkDelete("rolepermissions", null, {});
    await queryInterface.bulkDelete("permissions", null, {});
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("departments", null, {});
    await queryInterface.bulkDelete("addresses", null, {});
  },
};