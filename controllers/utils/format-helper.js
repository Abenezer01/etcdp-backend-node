// helpers.js
const getRecordById = async (model, req, res) => {
    try {
      const id = req.params.id;
      const data = await model.findOne({
        where: { id },
      });
  
      if (!data) {
        return res.status(404).json({ error: "Record not found" });
      }


      res.apiSuccess({
        data: data,
        total: 1 // Assuming a single user is being returned
      }, {
        pageSize: 1,
        page: 1
      });
    } catch (error) {
      console.error("Error:", error);
      res.apiError(error);
    }
  };
  
  module.exports = {
    getRecordById,
  };
  