const { end } = require("pdfkit");
const { Project, Department, ProjectType, ProjectCategory, ProjectSubCategory} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const ExcelJS = require("exceljs");
let self = {};

self.getAll = async (req, res) => {

  try {


    let usr = await usrData.userData(req, res);

    const whereCondition = { 
    //   department_id: usr.departmentID
    };

    const includeOptions = [
      {
          model: ProjectType,
          as: "projecttype"
      },
        { model: ProjectCategory,
          as: "projectcategory"
      },
        { model: ProjectSubCategory,
          as: "projectsubcategory"
      },
      {
          model: Department,
          as: "department"
      }
    ];

    const data = await Project.findAll({
        where: whereCondition,
        include: includeOptions
    });



    if(data.length === 0){
        const errorResponse = {
            _links: {
            previousPage: null,
            nextPage: null
            },
            _warning: [],
            payload: [],
            _attributes: {},
            _errors: {
            message: ["Data not found"]
            },
            _generated: new Date().toISOString()
        };
        return res.status(404).json(errorResponse);
    }
   
    let arr = data.map(item => {
      return {
        id: item.id,
        name: item.name,
        department: item.department ? item.department.name : '',
        projectcategory: item.projectcategory ? item.projectcategory.title : '',
        projectsubcategory: item.projectsubcategory ? item.projectsubcategory.title : '',
        projecttype: item.projecttype ? item.projecttype.title : '', 
        grade: item.grade,
        end_user: item.end_user,
        function: item.function,
        contract_no: item.contract_no,
        budget_code: item.budget_code,
        procurement_no: item.procurement_no,

      };
    });


    const buffer = await self.exportToExcel(arr, "Projects");

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=data.xlsx"
    );

    res.send(buffer);

    return res.json("Excel file generated successfully.");

  } catch (error) {
    res.apiError(error);
  }
};


self.exportToExcel = async (data, sheetName = "Sheet1") => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName);

  if (data.length === 0) {
    worksheet.addRow(["No Data"]);
    return workbook.xlsx.writeBuffer();
  }

  // Auto-generate column headers
  const columns = Object.keys(data[0]).map(key => ({
    header: key.toUpperCase(),
    key: key,
    width: 25
  }));

  worksheet.columns = columns;

  // Insert rows
  data.forEach(item => worksheet.addRow(item));

  return workbook.xlsx.writeBuffer();
};

module.exports = self;
