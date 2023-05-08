const https = require('https')
const fetch = require('node-fetch')
const __EXTERNAL_URL = 'https://backend.api.onespace.et/api/projects/pro'

const __PROJECT_URL = 'https://backend.api.onespace.et/api/integrations/projects'
const __STAKEHOLDER_URL = 'https://backend.api.onespace.et/api/integrations/stakeholders'
const __USER_URL = 'https://backend.api.onespace.et/api/integrations/users'
const __PLAN_URL = 'https://backend.api.onespace.et/api/integrations/plans'
const __REPORT_URL = 'https://backend.api.onespace.et/api/integrations/reports'


const self = {}

self.cpmAPI = (callback) => {
  https.get(__EXTERNAL_URL, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      callback(data)
    })
  }).on("error", (error) => {
    console.error(error)
    callback(null, error)
  })
}

self.get = (callback) => {

  
  fetch(__EXTERNAL_URL).then((res) => {
    res.json().then((res1) => {
      return res1;
    })
  })
  const options = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  }
  };

  https.get(__EXTERNAL_URL, options, (response) => {
  let data = '';

  response.on('data', (chunk) => {
      data += chunk;
  });

  response.on('end', () => {
      callback(data)
      console.log(JSON.parse(data));
  });
  }).on("error", (error) => {
  console.log("Error: " + error.message);
  });

}

self.getExternalData = async (apiname) => {

    let __EXTERNAL_URL = null

    __EXTERNAL_URL = eval(`__${apiname.toUpperCase()}_URL`)
    const response = await fetch(__EXTERNAL_URL, {method: 'GET'});
    let data = await response.json();
    if(apiname =="project"){
      data = self.transformProjects(data)
    }

    if(apiname =="plan" || apiname=="report"){
      data = self.transformPerformances(data)
    }
    return data

}

self.transformProjects = (projects) => {

  return projects.map((pro) => ({
    name: pro.project_name,
    id: pro.id,
    department_id: pro.company_id,
    parent_id: pro.parent_id,
    projectcategory_id: pro.project_category_id,
    projecttype_id: null,
    projectsubcategory_id: null,
    remark: pro.project_description,
    contract_no: pro.invoice_no,
    plot_area: pro.plot_area,
    budget_code: pro.charge_account_number,
    contract_no: null,
    procurement_no: null,
    revision_no: null,
    createdAt: pro.createdAt,
    updatedAt: pro.updatedAt
  }));
}

self.transformPerformances = (performance)=> {

  const obj = {
      0:3,
      1:3,
      2:3,
      3:4,
      4:4,
      5:4,
      6:1,
      7:1,
      8:1,
      9:2,
      10:2,
      11:2,
  }
  return performance.map((per) => ({
    
  
    profit_or_loss: per.profit_or_loss,
    projectexpense:per.projectexpense,
    sub_total_expense: per.sub_total_expense,
    id: per.id,
    parent_id: per.parent_id,
    project_id: per.project_id,
    type: per.type,
    project_expense: per.project_expense,
    manpower: per.manpower,
    direct_labour: per.direct_labour,
    indirect_labour: per.indirect_labour,
    material: per.material,
    machinery: per.machinery,
    other_expense: per.other_expense,
    sub_contractor_cost: per.sub_contractor_cost,
    financial_performance: per.financial_performance,
    physical_performance: per.physical_performance,
    cost_due_to_rework: per.cost_due_to_rework,
    over_head_cost: per.over_head_cost,
    year: per.year,
    month: per.month,
    quarter: obj[per.month],
    start: per.start,
    end: per.end,
    profit: per.profit,
    createdAt: per.createdAt,
    updatedAt: per.updatedAt


  }))
}


module.exports = self;
