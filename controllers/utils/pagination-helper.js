const { parseParams } = require("../../utils/request/param-hanlder");

const paginationHelper = async (Model, req, where = {}, include = []) => {
    const params = parseParams(req);
    const { pagination } = params;
  
    const page = pagination.page || 1; // default page is 1
    const pageSize = pagination.pageSize || 10; // default page size is 10
    const offset = (page - 1) * pageSize;
    const filter = params.filter;
  
    try {
      
      const { count, rows: data } = await Model.findAndCountAll({
        where: {...where, ...filter},
        include: include,
        offset: offset,
        limit: pageSize,
        order: [["created_at", "DESC"]],
        filter: filter
      });
  
      return {
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
  