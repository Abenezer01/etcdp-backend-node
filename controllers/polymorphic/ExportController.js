const { end } = require("pdfkit");
const { 
    Project, 
    Department,
    ProjectType, 
    ProjectCategory, 
    ProjectSubCategory,
    Stakeholder,
    StakeholderType,
    StakeholderCategory,
    StakeholderSubCategory,
    Resource,
    ResourceType,
    ResourceCategory,
    ResourceSubCategory,
    Document,
    DocumentType,
    DocumentCategory,
    DocumentSubCategory
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");
const { parseParams } = require("../../utils/request/param-hanlder");

let self = {};

self.exportDocument= async (req, res) => {
  try {

    let exports = req.query.export;

    let format = exports.format || "excel";
    
    let usr = await usrData.userData(req, res);

    const whereCondition = {};
    
    const includeOptions = [
      { model: DocumentType, as: "documenttype" },
      { model: DocumentCategory, as: "documentcategory" },
      { model: DocumentSubCategory, as: "documentsubcategory" },
      { model: Department, as: "department" }
    ];

    const data = await Document.findAll({
      where: whereCondition,
      include: includeOptions
    });

    if (!data.length) {
      return res.status(404).json({
        _errors: { message: ["Data not found"] }
      });
    }

    // Prepare flat array

    let arr = [];

    // Timestamp for dynamic filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    let number = 0;
    if(format === "pdf"){ 
         // --------------------------
        //         PDF EXPORT
        // --------------------------
  
        arr = data.map(item => ({
            // id: item.id,
            no: ++number,
            name: item.name,
            type: item.documenttype ? item.documenttype.title : '',
            category: item.documentcategory ? item.documentcategory.title : '',
            subcategory: item.documentsubcategory ? item.documentsubcategory.title : '', 
            center: item.department ? item.department.name : '',
          }));

          const pdfBuffer = await self.exportToPDF(arr, "Documents"); // ← table-format PDF
      
            const fileName = `documents_${timestamp}.pdf`;

            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${fileName}"`
            );

            return res.send(pdfBuffer);
    }
    else {

      
          // --------------------------
          //        EXCEL EXPORT
          // --------------------------
          

          arr = data.map(item => ({
              // id: item.id,
            no: ++number,
            name: item.name,
            type: item.documenttype ? item.documenttype.title : '',
            category: item.documentcategory ? item.documentcategory.title : '',
            subcategory: item.documentsubcategory ? item.documentsubcategory.title : '', 
            center: item.department ? item.department.name : '',
            author: item.author,
            edition: item.edition,
            publication_date: item.publication_date,
            isbn: item.isbn
          }));


          const excelBuffer = await self.exportToExcel(arr, "Documents");
          const fileName = `documents_${timestamp}.xlsx`;

          res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader(
            "Content-Disposition",
            `attachment; filename="${fileName}"`
          );

          return res.send(excelBuffer);

    }

  } catch (error) {
    res.apiError(error);
  }
};


self.exportResource= async (req, res) => {
  try {

    let exports = req.query.export;

    let format = exports.format || "excel";
    
    let usr = await usrData.userData(req, res);

    const whereCondition = {};
    
    const includeOptions = [
      { model: ResourceType, as: "resourceType" },
      { model: ResourceCategory, as: "resourceCategory" },
      { model: ResourceSubCategory, as: "resourceSubCategory" },
      { model: Department, as: "department" }
    ];

    const data = await Resource.findAll({
      where: whereCondition,
      include: includeOptions
    });

    if (!data.length) {
      return res.status(404).json({
        _errors: { message: ["Data not found"] }
      });
    }

    // Prepare flat array

    let arr = [];

    // Timestamp for dynamic filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    let number = 0;
    if(format === "pdf"){ 
         // --------------------------
        //         PDF EXPORT
        // --------------------------
  
        arr = data.map(item => ({
            // id: item.id,
            no: ++number,
            name: item.name,
            type: item.resourceType ? item.resourceType.title : '',
            category: item.resourceCategory ? item.resourceCategory.title : '',
            subcategory: item.resourceSubCategory ? item.resourceSubCategory.title : '', 
            center: item.department ? item.department.name : '',
            // quantity_measurement_unit_id: item.quantity_measurement_unit_id,
            // quality_measurement_unit_id: item.quality_measurement_unit_id
          }));

          const pdfBuffer = await self.exportToPDF(arr, "Resources"); // ← table-format PDF
      
            const fileName = `resources_${timestamp}.pdf`;

            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${fileName}"`
            );

            return res.send(pdfBuffer);
    }
    else {

      
          // --------------------------
          //        EXCEL EXPORT
          // --------------------------
          arr = data.map(item => ({
              // id: item.id,
              no: ++number,
              name: item.name,
              type: item.resourceType ? item.resourceType.title : '',
              category: item.resourceCategory ? item.resourceCategory.title : '',
              subcategory: item.resourceSubCategory ? item.resourceSubCategory.title : '', 
              center: item.department ? item.department.name : '',
              quantity_measurement_unit_id: item.quantity_measurement_unit_id,
              quality_measurement_unit_id: item.quality_measurement_unit_id
          }));


          const excelBuffer = await self.exportToExcel(arr, "Resources");
          const fileName = `resources_${timestamp}.xlsx`;

          res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader(
            "Content-Disposition",
            `attachment; filename="${fileName}"`
          );

          return res.send(excelBuffer);

    }

  } catch (error) {
    res.apiError(error);
  }
};

self.exportStakeholder= async (req, res) => {
  try {

    let exports = req.query.export;

    let format = exports.format || "excel";
    
    let usr = await usrData.userData(req, res);

    const whereCondition = {};
    
    const includeOptions = [
      { model: StakeholderType, as: "stakeholdertype" },
      { model: StakeholderCategory, as: "stakeholdercategory" },
      { model: StakeholderSubCategory, as: "stakeholdersubcategory" },
      { model: Department, as: "department" }
    ];

    const data = await Stakeholder.findAll({
      where: whereCondition,
      include: includeOptions
    });

    if (!data.length) {
      return res.status(404).json({
        _errors: { message: ["Data not found"] }
      });
    }

    // Prepare flat array

    let arr = [];

    // Timestamp for dynamic filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    let number = 0;
    
    if(format === "pdf"){ 
         // --------------------------
        //         PDF EXPORT
        // --------------------------
  
        arr = data.map(item => ({

            // id: item.id,
            no: ++number,
            name: item.trade_name,
            // center: item.department ? item.department.name : '',
            type: item.stakeholdertype ? item.stakeholdertype.title : '',
            category: item.stakeholdercategory ? item.stakeholdercategory.title : '',
            subcategory: item.stakeholdersubcategory ? item.stakeholdersubcategory.title : '', 
            tin: item.tin,
            origin: item.origin,
            // license_issued_date: item.license_issued_date
          }));

          const pdfBuffer = await self.exportToPDF(arr, "Stakeholders"); // ← table-format PDF
      
            const fileName = `stakeholders_${timestamp}.pdf`;

            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${fileName}"`
            );

            return res.send(pdfBuffer);
    }
    else {

      
          // --------------------------
          //        EXCEL EXPORT
          // --------------------------
          arr = data.map(item => ({
              // id: item.id,
              no: ++number,
              name: item.trade_name,
              center: item.department ? item.department.name : '',
              type: item.stakeholdertype ? item.stakeholdertype.title : '',
              category: item.stakeholdercategory ? item.stakeholdercategory.title : '',
              subcategory: item.stakeholdersubcategory ? item.stakeholdersubcategory.title : '', 
              tin: item.tin,
              origin: item.origin,
              license_issued_date: item.license_issued_date
          }));


          const excelBuffer = await self.exportToExcel(arr, "Stakeholders");
          const fileName = `stakeholders_${timestamp}.xlsx`;

          res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader(
            "Content-Disposition",
            `attachment; filename="${fileName}"`
          );

          return res.send(excelBuffer);

    }

  } catch (error) {
    res.apiError(error);
  }
};



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
        center: item.department ? item.department.name : '',
        type: item.projecttype ? item.projecttype.title : '', 
        category: item.projectcategory ? item.projectcategory.title : '',
        subcategory: item.projectsubcategory ? item.projectsubcategory.title : '',
        grade: item.grade,
        end_user: item.end_user,
        function: item.function,
        contract_no: item.contract_no,
        budget_code: item.budget_code,
        procurement_no: item.procurement_no,

      };
    });


    const buffer = await self.exportToExcel(arr, "Projects");

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); 
    const fileName = `projects_${timestamp}.xlsx`;
    

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );

    res.send(buffer);

    return res.json("Excel file generated successfully.");

  } catch (error) {
    res.apiError(error);
  }
};




self.exportProject = async (req, res) => {
  try {

    let exports = req.query.export;

    let format = exports.format || "excel";
    
    let usr = await usrData.userData(req, res);
    const whereCondition = {};
    
    const includeOptions = [
      { model: ProjectType, as: "projecttype" },
      { model: ProjectCategory, as: "projectcategory" },
      { model: ProjectSubCategory, as: "projectsubcategory" },
      { model: Department, as: "department" }
    ];

    const data = await Project.findAll({
      where: whereCondition,
      include: includeOptions
    });

    if (!data.length) {
      return res.status(404).json({
        _errors: { message: ["Data not found"] }
      });
    }

    // Prepare flat array

    let arr = [];

    // Timestamp for dynamic filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    let number = 0;
    
    if(format === "pdf"){ 
         // --------------------------
        //         PDF EXPORT
        // --------------------------
  
        arr = data.map(item => ({
            // id: item.id,
            no: ++number,
            name: item.name,
            type: item.projecttype ? item.projecttype.title : "",
            category: item.projectcategory ? item.projectcategory.title : "",
            subcategory: item.projectsubcategory ? item.projectsubcategory.title : "",
            end_user: item.end_user,

            // department: item.department ? item.department.name : "",      
            // grade: item.grade,
            // function: item.function,
            // contract_no: item.contract_no,
            // budget_code: item.budget_code,
            // procurement_no: item.procurement_no
          }));

          const pdfBuffer = await self.exportToPDF(arr, "Projects"); // ← table-format PDF
      
            const fileName = `projects_${timestamp}.pdf`;

            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${fileName}"`
            );

            return res.send(pdfBuffer);
    }
    else {

      
          // --------------------------
          //        EXCEL EXPORT
          // --------------------------
          arr = data.map(item => ({
            // id: item.id,
            no: ++number,
            name: item.name,
            type: item.projecttype ? item.projecttype.title : "",
            category: item.projectcategory ? item.projectcategory.title : "",
            subcategory: item.projectsubcategory ? item.projectsubcategory.title : "",
            end_user: item.end_user,

            center: item.department ? item.department.name : "",      
            grade: item.grade,
            function: item.function,
            contract_no: item.contract_no,
            budget_code: item.budget_code,
            procurement_no: item.procurement_no
          }));


          const excelBuffer = await self.exportToExcel(arr, "Projects");
          const fileName = `projects_${timestamp}.xlsx`;

          res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader(
            "Content-Disposition",
            `attachment; filename="${fileName}"`
          );

          return res.send(excelBuffer);

    }

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

// self.exportToPDF = (data, title = "Data") => {
//   return new Promise((resolve, reject) => {
//     try {
//       // Landscape layout for wider table
//       const doc = new PDFDocument({ margin: 40, layout: "landscape" });

//       const chunks = [];
//       doc.on("data", chunks.push.bind(chunks));
//       doc.on("end", () => resolve(Buffer.concat(chunks)));

//       // Title
//       doc.fontSize(20).text(title, { align: "center" });
//       doc.moveDown();

//       if (!data.length) {
//         doc.fontSize(14).text("No data available");
//         doc.end();
//         return;
//       }

//       const columns = Object.keys(data[0]);

//       // Layout calculations
//       const tableTop = 100;
//       const colPadding = 10;

//       // dynamically calculate width
//       const pageWidth = doc.page.width - doc.options.margin * 2;
//       const columnWidth = pageWidth / columns.length;

//       let y = tableTop;

//       // Draw header
//       doc.font("Helvetica-Bold").fontSize(11);
//       columns.forEach((col, i) => {
//         doc.text(
//           col.toUpperCase(),
//           doc.options.margin + i * columnWidth + colPadding,
//           y,
//           { width: columnWidth - colPadding * 2 }
//         );
//       });

//       y += 25;

//       doc.font("Helvetica").fontSize(10);

//       // Rows
//       data.forEach(row => {
//         let rowHeight = 20;

//         // Wrap each row cell, calculate needed height
//         columns.forEach(col => {
//           const text = String(row[col] ?? "");
//           const textHeight = doc.heightOfString(text, {
//             width: columnWidth - colPadding * 2,
//           });
//           rowHeight = Math.max(rowHeight, textHeight + 6);
//         });

//         // Page break
//         if (y + rowHeight > doc.page.height - 40) {
//           doc.addPage({ layout: "landscape" });
//           y = tableTop;
//         }

//         // Draw row text
//         columns.forEach((col, i) => {
//           const text = String(row[col] ?? "");
//           doc.text(
//             text,
//             doc.options.margin + i * columnWidth + colPadding,
//             y,
//             { width: columnWidth - colPadding * 2 }
//           );
//         });

//         y += rowHeight;
//       });

//       doc.end();
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

self.exportToPDF = (data, title = "Data") => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 40, layout: "landscape" });
      const chunks = [];
      doc.on("data", chunks.push.bind(chunks));
      doc.on("end", () => resolve(Buffer.concat(chunks)));

      // Title
      doc.fontSize(20).text(title, { align: "center" });
      doc.moveDown();

      if (!data.length) {
        doc.fontSize(14).text("No data available");
        doc.end();
        return;
      }

      const columns = Object.keys(data[0]);
      const tableTop = 100;
      const colPadding = 10;

      const pageWidth = doc.page.width - doc.options.margin * 2;

      // ---------------------------
      // 1. CALCULATE DYNAMIC COLUMN WIDTHS
      // ---------------------------
      doc.font("Helvetica").fontSize(10);

      let colWidths = columns.map(col => {
        let maxWidth = doc.widthOfString(col.toUpperCase()) + colPadding * 2;

        data.forEach(row => {
          const text = String(row[col] ?? "");
          const w = doc.widthOfString(text) + colPadding * 2;
          if (w > maxWidth) maxWidth = w;
        });

        return maxWidth;
      });

      // Ensure table fits page — scale down proportionally if needed
      let totalWidth = colWidths.reduce((a, b) => a + b, 0);
      if (totalWidth > pageWidth) {
        const scale = pageWidth / totalWidth;
        colWidths = colWidths.map(w => w * scale);
        totalWidth = pageWidth;
      }

      let y = tableTop;
      let pageNumber = 1;

      // ---------------------------
      // DRAW HEADER
      // ---------------------------
      const drawHeader = () => {
        doc.font("Helvetica-Bold").fontSize(11);

        // Shaded header
        doc.rect(doc.options.margin, y, totalWidth, 25)
          .fill("#61CE70")
          .stroke();

        let x = doc.options.margin;

        columns.forEach((col, i) => {
          doc.fillColor("black").text(
            col.toUpperCase(),
            x + colPadding,
            y + 7,
            { width: colWidths[i] - colPadding * 2 }
          );
          x += colWidths[i];
        });

        y += 25;
      };

      // ---------------------------
      // DRAW ROW
      // ---------------------------
      const drawRow = (row, isEven) => {
        let rowHeight = 20;

        // Measure wrapped height
        let x = doc.options.margin;
        columns.forEach((col, i) => {
          const text = String(row[col] ?? "");
          const h = doc.heightOfString(text, {
            width: colWidths[i] - colPadding * 2,
          });
          rowHeight = Math.max(rowHeight, h + 6);
        });

        // Page break
        if (y + rowHeight > doc.page.height - 40) {
          // Add page number
          doc.fontSize(9).fillColor("gray").text(
            `Page ${pageNumber}`,
            doc.page.width - doc.options.margin - 50,
            doc.page.height - 30
          );

          doc.addPage({ layout: "landscape" });
          pageNumber++;
          y = tableTop;
          drawHeader();
        }

        // Zebra striping
        if (isEven) {
          doc.rect(doc.options.margin, y, totalWidth, rowHeight)
            .fill("#f2f2f2")
            .stroke();
        }

        // Draw cells
        x = doc.options.margin;
        columns.forEach((col, i) => {
          doc.rect(x, y, colWidths[i], rowHeight).stroke();

          doc.fillColor("black").text(
            String(row[col] ?? ""),
            x + colPadding,
            y + 7,
            { width: colWidths[i] - colPadding * 2 }
          );

          x += colWidths[i];
        });

        y += rowHeight;
      };

      drawHeader();

      data.forEach((row, idx) => {
        drawRow(row, idx % 2 === 1); 
      });

      // Final page number
      doc.fontSize(9).fillColor("gray").text(
        `Page ${pageNumber}`,
        doc.page.width - doc.options.margin - 50,
        doc.page.height - 30
      );

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = self;
