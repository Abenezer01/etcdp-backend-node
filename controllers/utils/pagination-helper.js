const { parseParams } = require("../../utils/request/param-hanlder");
const usrData = require("../../utils/userDataFromToken");

// 🚨 Define the Smart Search function inside or import it
const smartSearch = (data, searchText) => {
    if (!searchText) return data;
    const lowerSearchText = searchText.toLowerCase();

    return data.filter(item => {
        // NOTE: This assumes 'item' is a plain JavaScript object 
        // (via item.get({ plain: true }) or item.toJSON()) or a Sequelize instance
        // whose data properties are enumerable.
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                let value = item[key];
                
                // Handle objects/arrays (like projectstatuses)
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


const paginationHelper = async (Model, req, where = {}, include = []) => {
    const params = parseParams(req);
    const { pagination } = params;
 
    let page = pagination.page || 1; 
    let pageSize = pagination.pageSize || 10;
    const initialFilter = params.filter; // This is for Sequelize WHERE condition
    let sorting = params.sorting;
      
    // 🚨 1. Get the search text (assuming you pass it in the query, e.g., ?search=yeti)
    const searchText = req.query.search || ""; 
    const isSmartSearchActive = searchText.length > 0;

    // if the data is null make sure this thing works fine 
    
    try {
        const fullUrl = req.originalUrl;
        const segments = fullUrl.split("/");
        const lastElement = segments[segments.length - 1];

        if(lastElement === "stakeholders"){
            const usr = await usrData.userData(req);
            if(usr.stakeholder_id){
                where.id = usr.stakeholder_id;
            }       
        }

        // --- FETCH DATA (Modified Logic) ---
        
        let fetchedData;
        let totalCount;

        if (isSmartSearchActive) {
            // 🚨 Strategy A: Smart Search is active, fetch ALL matching data first
            // We ignore pagination/offset/limit for the database query here, 
            // but keep the basic WHERE conditions (like department_id).
            const result = await Model.findAll({
                where: {...where, ...initialFilter},
                include: include,
                order: [[sorting.property, sorting.direction]]
            });
            
            // Convert to plain objects for reliable JavaScript searching
            let plainData = result.map(item => item.get({ plain: true })); 

            // 🚨 2. Perform the Smart Search on the full dataset0000000000
            fetchedData = smartSearch(plainData, searchText);
            totalCount = fetchedData.length;
            
            // 🚨 3. Re-apply pagination to the filtered results
            const offset = (page - 1) * pageSize;
            const paginatedData = fetchedData.slice(offset, offset + pageSize);
            fetchedData = paginatedData;


        } else {
            // Strategy B: Standard query (no smart search)
            const result = await Model.findAndCountAll({
                where: {...where, ...initialFilter},
                include: include,
                offset: (page - 1) * pageSize, // Use original offset here
                limit: pageSize,
                order: [[sorting.property, sorting.direction]]
            });
            
            // If smart search is NOT active, use the data and count directly from Sequelize
            fetchedData = result.rows;
            totalCount = result.count;
        }
        
        // --- RETURN RESULT ---

        // sorting the fetched data 

        // sorting the fetched data 
        // fetchedData.sort((a, b) => {
        //     if (a[sorting.property] < b[sorting.property]) {
        //         return sorting.direction === "ASC" ? -1 : 1;
        //     }
        //     if (a[sorting.property] > b[sorting.property]) {
        //         return sorting.direction === "ASC" ? 1 : -1;
        //     }
        //     return 0;
        // });
        return {
            data: fetchedData,
            total: totalCount,
            pagination: {
                pageSize,
                page,
                // Total pages is calculated from the total count after filtering
                totalPages: Math.ceil(totalCount / pageSize)
            }
        };

    } catch (error) {
        console.error("Pagination Helper Error:", error);
        return error;
    }
};
 
module.exports = paginationHelper;