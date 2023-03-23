const {
	projectplan,
	monthlyreport,
	Sequelize
} = require("./../../models");
const {sentNotification, activityLog, saveActionState} = require("../../utils/helper.js")
const moment = require('moment')
const months = require("./../../config/quarter")
const {validateMonthlyReport} = require('../../validator')

let self = {};

self.getAll = async (req,res) => {
	try{
		let data = await monthlyreport.findAll();
		return res.json(data)
	}catch(error){
		res.status(500).json({
			message: error.message
		})
	}
}

self.get = async (req,res) => {
	try{
		let id = req.params.id;
		let data = await monthlyreport.findOne({
			attributes:["id","name", "description"],
			where:{
				id:id
			}
		});
		return res.json(data)
	}catch(error){
		res.status(500).json({
			message: error.message
		})
	}
}

self.save = async (req,res) => {
	try{
		let body = req.body; 

		let existing = await monthlyreport.findOne({
			where: {
				project_id: body.project_id,
				year: body.year,
				quarter: body.quarter,
				is_submitted: false
			}
		})

		if(existing){
			return res.status(302).json({
				message: 'Data already found!'
			})
		}else{
			let data = await monthlyreport.create(body);
			if(data){
				let usr = await usrData.userData(req, res)
				if(usr){
					await saveActionState(data.id, "monthlyreport", "REGISTER", usr.usrID, req, res)
				}
			}
			return res.json(data)
		}
		
	}catch(error){
		res.status(500).json({
			message: error.message
		})
	}
}

self.update = async (req,res) => {
	try{
		let id = req.params.id;
		let body = req.body;
		let data = await monthlyreport.update(body,{
			where:{
				id:id
			}
		});
		return res.json(data)
	}catch(error){
		res.status(500).json({
			message: error.message
		})
	}
}

self.delete = async (req,res) => {
	try{
		let id = req.params.id;
		let data = await monthlyreport.destroy({
			where:{
				id:id
			}
		});
		return res.json(data)
	}catch(error){
		res.status(500).json({
			message: error.message
		})
	}
}

self.getMonthlyProjectReport = async(req, res) => {
	let id = req.params.id 
	let year = req.params.year
	let quarter = req.params.quarter 

	
	try {
		let data = null

		let plan = await projectplan.findOne({
			where: {
				project_id: id,
				year:year,
				quarter:quarter
			}
		})
		if(!plan){
			return res.status(404).json({
				message: "There is no plan data"
			})
		}else{
			data = await monthlyreport.findOne({
				where: {
					project_id: id,
					year: year,
					quarter: quarter
				}
			})

			if(!data){
				

				data = await monthlyreport.create({
						project_id: id,
						year: year,
						quarter: quarter
				})
				let us = req.decoded

                await saveActionState(data.id, "monthlyreport", "REGISTER", us.id, req, res)
			}

			return res.json(data)
		}
		
					
		
	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}

module.exports = self;