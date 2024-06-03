const formatResponse = (req, res, next) => {
    res.apiSuccess = (payload, paginationAttributes = {}) => {
      const page = req.query.page || 1;
      const pageSize = req.query.pageSize || 10;
      const totalPages = Math.ceil(payload.total / pageSize);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;
  
      const response = {
        _links: {
          previousPage: hasPreviousPage ? `${req.originalUrl}?page=${page - 1}&pageSize=${pageSize}` : null,
          nextPage: hasNextPage ? `${req.originalUrl}?page=${page + 1}&pageSize=${pageSize}` : null,
        },
        _warning: [],
        payload: payload.data || payload,
        _attributes: {
          pagination: {
            pageSize: pageSize,
            page: page,
            total: payload.total || 0,
            lastPage: totalPages,
            ...paginationAttributes,
          },
        },
        _errors: [],
        _generated: new Date().toISOString(),
      };
  
      res.json(response);
    };
  
    res.apiError = (error) => {
      const response = {
        _links: {
          previousPage: null,
          nextPage: null,
        },
        _warning: [],
        payload: [],
        _attributes: {},
        _errors: [error.message || error],
        _generated: new Date().toISOString(),
      };
  
      res.status(500).json(response);
    };
  
    next();
  };
  
  module.exports = formatResponse;