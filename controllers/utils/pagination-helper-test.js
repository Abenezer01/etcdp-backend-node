const { parseParams } = require("../../utils/request/param-hanlder");
const usrData = require("../../utils/userDataFromToken");

// 🚨 Utility function to convert frontend nested paths into Sequelize association paths
const formatSequelizeFilters = (filters) => {
    if (!filters || typeof filters !== 'object') return {};

    const formatted = {};

    // Helper to recursively parse nested objects if the frontend sends structured objects
    const extractKeys = (obj, currentPath = []) => {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key];

                if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
                    extractKeys(value, [...currentPath, key]);
                } else {
                    // Combine standard dot notation or deeply nested object keys
                    const fullPath = [...currentPath, ...key.split('.')];
                    
                    if (fullPath.length > 1) {
                        // Converts ['ProjectStatuses', 'Status', 'title'] -> '$ProjectStatuses.Status.title$'
                        formatted[`$${fullPath.join('.')}$`] = value;
                    } else {
                        formatted[key] = value;
                    }
                }
            }
        }
    };

    extractKeys(filters);
    return formatted;
};

// Define the Smart Search function
const smartSearch = (data, searchText) => {
    if (!searchText) return data;
    const lowerSearchText = searchText.toLowerCase();

    return data.filter(item => {
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                let value = item[key];

                if (typeof value === 'object' && value !== null) {
                    try {
                        value = JSON.stringify(value);
                    } catch (e) {
                        continue;
                    }
                }

                const stringValue = String(value);

                if (stringValue.toLowerCase().includes(lowerSearchText)) {
                    return true;
                }
            }
        }
        return false;
    });
};

const sortModel = (data, sorting) => {
    return data.sort((a, b) => {
        const valA = (a[sorting.property] || "").toString().toLowerCase();
        const valB = (b[sorting.property] || "").toString().toLowerCase();

        if (valA < valB) return sorting.direction === "ASC" ? -1 : 1;
        if (valA > valB) return sorting.direction === "ASC" ? 1 : -1;
        return 0;
    });
};

const paginationHelper = async (Model, req, where = {}, include = []) => {
    const params = parseParams(req);
    const { pagination } = params;

    let page = pagination.page || 1;
    let pageSize = pagination.pageSize || 10;
    let sorting = params.sorting;

    // 🚨 Dynamically format incoming filters to support associated model paths
    const formattedFilters = formatSequelizeFilters(params.filter);

    const searchText = req.query.search || "";
    const isSmartSearchActive = searchText.length > 0;

    try {
        const fullUrl = req.originalUrl;
        const segments = fullUrl.split("/");
        const lastElement = segments[segments.length - 1];

        if (lastElement === "stakeholders") {
            const usr = await usrData.userData(req);
            if (usr.stakeholder_id) {
                where.id = usr.stakeholder_id;
            }
        }

        // Combine base query 'where' with our newly formatted filters
        const combinedWhere = { ...where, ...formattedFilters };

        let fetchedData;
        let totalCount;

        if (isSmartSearchActive) {
            const result = await Model.findAll({
                where: combinedWhere,
                include: include,
                subQuery: false // 🚨 Essential when filtering associations with pagination
            });

            let plainData = result.map(item => {
                return typeof item.get === 'function' ? item.get({ plain: true }) : item;
            });

            fetchedData = smartSearch(plainData, searchText);
            fetchedData = sortModel(fetchedData, sorting);
            totalCount = fetchedData.length;

            const offset = (page - 1) * pageSize;
            fetchedData = fetchedData.slice(offset, offset + pageSize);

        } else {
            // Note: Since your current helper fetches ALL rows from DB and slices them in JS
            // (due to commented out offset/limit), subQuery: false protects against query crashes.
            const result = await Model.findAndCountAll({
                where: combinedWhere,
                include: include,
                subQuery: false // 🚨 Essential when filtering associations with pagination
            });

            // Convert to plain instances if they aren't already, ensuring sort works seamlessly
            fetchedData = result.rows.map(item => {
                return typeof item.get === 'function' ? item.get({ plain: true }) : item;
            });
            
            fetchedData = sortModel(fetchedData, sorting);

            const offset = (page - 1) * pageSize;
            fetchedData = fetchedData.slice(offset, offset + pageSize);
            totalCount = result.count;
        }

        return {
            data: fetchedData || [],
            total: totalCount || 0,
            pagination: {
                pageSize,
                page,
                totalPages: Math.ceil((totalCount || 0) / pageSize)
            }
        };

    } catch (error) {
        console.error("Pagination Helper Error:", error);
        throw error; // Return the error or bubble it up to handling middleware
    }
};

module.exports = paginationHelper;