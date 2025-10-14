'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE VIEW project_overview AS
      SELECT 
        p.id AS project_id,
        p.name AS project_name,
        p.department_id,

        -- Financials (from projectfinances)
        pf.original_contract_amount,

        -- Time (from projecttimes)
        pt.original_contract_duration,

        -- Total variation amount
        COALESCE(SUM(pv.amount), 0) AS total_variation_amount,

        -- Planned performance (from latest projectplans)
        COALESCE(SUM(pp.financial_performance),0) AS planned_financial_performance,
        COALESCE(SUM(pp.physical_performance),0) AS planned_physical_performance ,  

        -- Reported performance (not implemented yet)
        CAST(NULL AS DOUBLE) AS report_financial_performance,
        CAST(NULL AS DOUBLE) AS report_physical_performance,

        p.created_at AS created_at,
        p.updated_at AS updated_at

      FROM projects p
      LEFT JOIN projectfinances pf ON pf.project_id = p.id
      LEFT JOIN projecttimes pt ON pt.project_id = p.id
      LEFT JOIN projectvariations pv ON pv.project_id = p.id
      LEFT JOIN projectplans pp ON pp.project_id = p.id

      GROUP BY 
        p.id, p.name, p.department_id,
        pf.original_contract_amount,
        pt.original_contract_duration,
        p.created_at, p.updated_at;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS project_overview;
    `);
  }
};
