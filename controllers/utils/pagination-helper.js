const { where } = require("sequelize");
const { parseParams } = require("../../utils/request/param-hanlder")

const paginationHelper = async (Model, req, where = {}, include = []) => {
    const params = parseParams(req);
    const { pagination } = params;
  
    const page = pagination.page || 1; // default page is 1
    const pageSize = pagination.pageSize || 10; // default page size is 10
    const offset = (page - 1) * pageSize;
  
    try {
      const { count, rows: data } = await Model.findAndCountAll({
        where: where,
        include: include,
        offset: offset,
        limit: pageSize,
        order: [["created_at", "DESC"]],
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
      console.error("Error during pagination:", error);
      throw error;
    }
  };
  
  module.exports = paginationHelper;
  