'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE VIEW project_contract_data_overview AS
      SELECT 
        p.id AS project_id,
        p.name AS project_name,
        pt.original_contract_duration,
        pt.commencement_date,
        
        pf.main_contract_price_amount AS total_contract_amount,
        
        -- Stakeholders
        MAX(CASE WHEN ps.title = 'Client' THEN ps.stakeholder_id END) AS client_id,
        MAX(CASE WHEN ps.title = 'Consultant' THEN ps.stakeholder_id END) AS consultant_id,
        MAX(CASE WHEN ps.title = 'Contractor' THEN ps.stakeholder_id END) AS contractor_id,
        
        -- Extensions
        COALESCE(SUM(pv.extension_time), 0) AS total_extension_days,
        
        -- Planned & actual financials
        COALESCE(SUM(pp.financial_performance), 0) AS planned_financial_performance,
        COALESCE(SUM(pr.financial_performance), 0) AS actual_financial_performance,
        COALESCE(SUM(pr.project_expense), 0) AS actual_cost,
        
        -- Interim payments
        COALESCE(SUM(CASE WHEN pay.type = 'INTERIM_PAYMENT' THEN pay.amount ELSE 0 END), 0) AS paid_ipc,
        
        p.created_at,
        p.updated_at

      FROM projects p
      LEFT JOIN projecttimes pt ON pt.project_id = p.id
      LEFT JOIN projectfinances pf ON pf.project_id = p.id
      LEFT JOIN projectstakeholders ps ON ps.project_id = p.id
      LEFT JOIN projectvariations pv ON pv.project_id = p.id
      LEFT JOIN projectplans pp ON pp.project_id = p.id
      LEFT JOIN projectreports pr ON pr.project_id = p.id
      LEFT JOIN payments pay ON pay.project_id = p.id

      GROUP BY 
        p.id, p.name, pt.original_contract_duration, pt.commencement_date, 
        pf.main_contract_price_amount, p.created_at, p.updated_at;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS project_contract_data_overview;
    `);
  }
};
