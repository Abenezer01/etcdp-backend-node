const usrData = require("../../utils/userDataFromToken");
const actionHelper = require("../utils/action-helper");
const { ActionState} = require("../../models");


const getRecordById = async (model, req, res, include = []) => {
    try {
      const id = req.params.id;
      const data = await model.findOne({
        where: { id },
        include: include,
      });
  
      if (!data) {
        // return res.status(404).json({ error: "Record not found" });
        const errorResponse = {
          _links: {
            previousPage: null,
            nextPage: null
          },
          _warning: [],
          payload: [],
          _attributes: {},
          _errors: {
            message: "Record not found"
          },
          _generated: new Date().toISOString()
        };
        return res.status(404).json(errorResponse);
      }


      res.apiSuccess({
        data: data
      });
    } catch (error) {
      res.apiError(error);
    }
  };
  const  saveRecord = async (model, req, res, uniqueAttribute = null) => {
    try {        
      const body = req.body;
      // check for unique attribute values

      if(uniqueAttribute){
        const existingRecord = await model.findOne({
          where: {
            [uniqueAttribute]: body[uniqueAttribute]
          }
        });

        if (existingRecord) {
          const errorResponse = {
            _links: { previousPage: null, nextPage: null },
            _warning: [],
            payload: [],
            _attributes: {},
            _errors: {
              uniqueAttribute: [
                `The ${uniqueAttribute} field must be unique.`
              ]
            },
            _generated: new Date().toISOString()
          };
          return res.status(401).json(errorResponse);
        }
      }

      
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

        await actionHelper.saveActivityLog(
          usr.usrID, "create", "module", data.id, model.name, req, res
        )
      }

  
      res.apiSuccess({
        data: data
      });
    } catch (error) {
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
          data: updatedData
        });
      }else{
        throw new Error("Record not found");
  
      }
  
    } catch (error) {
      res.apiError(error);
    }
  };
  
  
  const deleteRecord = async (model, req, res) => {
    try {
      const id = req.params.id;
      const deleted = await model.destroy({
        where: { id },
      });
  
      if (deleted) {
        //delete all related data like action state
        await ActionState.destroy({
          where: {
            model_id: id
          }
        })
         return res.status(200).json({ message: 'Record deleted successfully.' });

      }
  
      throw new Error("Record not found");
    } catch (error) {
      res.apiError(error);
    }
  };
  
  module.exports = {
    getRecordById,
    saveRecord,
    updateRecord,
    deleteRecord,
  };
  