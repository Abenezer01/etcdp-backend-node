"use strict";

/** @type {import('sequelize-cli').Migration} */

const tables = [
  "actionstates",
  "addresses",
  "agelevels",
  "buildingdimensiondetails",
  "buildingenvelopmaterials",
  "businessfields",
  "certificates",
  "children",
  "constructionrelatedservices",
  "constructionresourcequantityprices",
  "constructionresources",
  "contactpeople",
  "departments",
  "detailresourcetypes",
  "documentcategories",
  "documents",
  "documentsubcategories",
  "documenttypes",
  "educationstatuses",
  "electrictowers",
  "employeeages",
  "employeeeducations",
  "experiencelevels",
  "familystatuses",
  "files",
  "generatingcapacities",
  "graduates",
  "hydroelectricdams",
  "images",
  "irrigationcapacities",
  "jobexperiences",
  "modelmenus",
  "monthlyreports",
  "notes",
  "notifications",
  "operationlocations",
  "ownerships",
  "passwordresets",
  "payments",
  "permissions",
  "photos",
  "ports",
  "positionpermissions",
  "positions",
  "projectbonds",
  "projectcategories",
  "projectdocuments",
  "projectextensiontimes",
  "projectfinances",
  "projectplans",
  "projectreports",
  "projects",
  "projectstakeholders",
  "projectstatuses",
  "projectsubcategories",
  "projecttimes",
  "projecttypes",
  "projectusedresources",
  "projectvariations",
  "railways",
  "railwaystations",
  "referencedocuments",
  "regulationdocuments",
  "regulations",
  "replies",
  "researchdocuments",
  "reservoirinfos",
  "resourcebrands",
  "resourcecategories",
  "resourcequantityandprices",
  "resources",
  "resourcespecifications",
  "resourcestudyfields",
  "resourcestudylevels",
  "resourcesubcategories",
  "resourcetypes",
  "resourceworkexperiences",
  "roadinfos",
  "roadlayers",
  "roadsegments",
  "rolepermissions",
  "roles",
  "salaries",
  "solarenergies",
  "spillwayinfos",
  "stakecategories",
  "stakeholdercontactpeople",
  "stakeholderemails",
  "stakeholderinfos",
  "stakeholderphones",
  "stakeholders",
  "stakeholderservices",
  "stakeholderstudyfields",
  "stakeholdertypes",
  "stakesubcategories",
  "statuses",
  "studyfields",
  "studylevels",
  "studyperiodcosts",
  "studyprograms",
  "telecoms",
  "totalemployees",
  "trainings",
  "transformers",
  "transformertypes",
  "transmissionlines",
  "turbineinfos",
  "useremails",
  "userphones",
  "userpositions",
  "users",
  "waterirrigationdams",
  "windenergies",
  "workexperiences",
];

module.exports = {
  async up (queryInterface, /* Sequelize */) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */



    for (const table of tables) {
      await queryInterface.renameColumn(table, "createdAt", "created_at");
      await queryInterface.renameColumn(table, "updatedAt", "updated_at");
    }
  },

  async down (queryInterface, /* Sequelize */) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // List of tables to create


    for (const table of tables) {
      await queryInterface.renameColumn(table, "createdAt", "created_at");
      await queryInterface.renameColumn(table, "updatedAt", "updated_at");
    }
  }
};
