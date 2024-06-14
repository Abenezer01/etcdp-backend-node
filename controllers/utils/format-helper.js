const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper")

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
  const saveRecord = async (model, req, res) => {
    try {
        
      const body = req.body;
      const data = await model.create(body);
      
  
      if (data) {
        const usr = await usrData.userData(req, res);
        await actionHelper.saveActionState(
          data.id,
          model.name,
          "REGISTER",
          usr.usrID,
          req,
          res
        );
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
  
  const updateRecord = async (model, req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const [updated] = await model.update(body, {
        where: { id },
      });
  
      if (updated) {
        const updatedData = await model.findOne({ where: { id } });
        return res.apiSuccess({
          data: updatedData,
          total: 1 // Assuming a single user is being returned
        }, {
          pageSize: 1,
          page: 1
        });
      }
  
      throw new Error("Record not found");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  
  const deleteRecord = async (model, req, res) => {
    try {
      const id = req.params.id;
      const deleted = await model.destroy({
        where: { id },
      });
  
      if (deleted) {
        return res.status(204).json(); // No Content
      }
  
      throw new Error("Record not found");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    getRecordById,
    saveRecord,
    updateRecord,
    deleteRecord,
  };
  