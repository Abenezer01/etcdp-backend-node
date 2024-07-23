const { parseParams } = require("../../utils/request/param-hanlder");
const usrData = require("../../utils/userDataFromToken");
const paginationHelper = async (Model, req, where = {}, include = []) => {
    const params = parseParams(req);
    const { pagination } = params;
  
    const page = pagination.page || 1; // default page is 1
    const pageSize = pagination.pageSize || 10; // default page size is 10
    const offset = (page - 1) * pageSize;
    const filter = params.filter;
  
    try {

      const fullUrl = req.originalUrl;

      const segments = fullUrl.split("/");

      // Get the last element
      const lastElement = segments[segments.length - 1];

      if(lastElement === "stakeholders"){
        const usr = await usrData.userData(req);
        if(usr.stakeholder_id){
          where.id = usr.stakeholder_id;
        }      
      }
      const { count, rows: data } = await Model.findAndCountAll({
        where: {...where, ...filter},
        include: include,
        offset: offset,
        limit: pageSize,
        order: [["created_at", "DESC"]],
        filter: filter
      });
  
      return {
        // data:data ? data : [],
        data,
        total: count,
        pagination: {
          pageSize,
          page,
        }
      };
    } catch (error) {
      return error;
    }
  };
  
  module.exports = paginationHelper;
  