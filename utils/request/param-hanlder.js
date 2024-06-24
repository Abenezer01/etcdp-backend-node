const parseParams = (req) => {
    const params = {
      locale: req.query.locale || null,
      pagination: req.query.pagination
        ? {
          pageSize: parseInt(req.query.pagination.pageSize, 10) || 10,
          page: parseInt(req.query.pagination.page, 10) || 1,
        }
        : {
          pageSize: 10, // Default page size
          page: 1, // Default page
        },
      parentId: req.query.parentId,
      filter: req.query.filter,
      sorting: req.query.sorting
        ? {
          property: req.query.sorting.property,
          direction: req.query.sorting.direction,
        }
        : null,
      includes: req.query.includes ? req.query.includes.split(",") : null,
      type: req.query.type || null,
      position: req.query.position || null,
    };
  
    return params;
  };
  
  module.exports = { parseParams };