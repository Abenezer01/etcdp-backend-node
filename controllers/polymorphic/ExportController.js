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
    DocumentSubCategory,
    ResourceMasterData,
    Professional
} = require("../../models");
const usrData = require("../../utils/userDataFromToken");
const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");
const { parseParams } = require("../../utils/request/param-hanlder");
const paginationHelper = require("../utils/pagination-helper");
const { where } = require("sequelize");

let self = {};

self.exportProfessional = async (req, res) => {
  try {

    let exports = req.query.export;
    let format = exports?.format || "excel";

    let fields = exports?.fields || [];

    // If fields come as string → parse JSON
    if (typeof fields === "string") {
      try { fields = JSON.parse(fields); } catch { fields = []; }
    }

    // Clean whitespace & REMOVE name (always included)
    fields = fields.map(f => f.trim()).filter(f => f !== "name");

    let usr = await usrData.userData(req, res);

    const whereCondition = { department_id: usr.departmentID };

    const includeOptions = [
      // { model: ProfessionalType, as: "professionaltype" },
      // { model: ProfessionalCategory, as: "professionalcategory" },
      // { model: ProfessionalSubCategory, as: "professionalsubcategory" },
      { model: Department, as: "department" }
    ];

    const data = await Professional.findAll({
      where: whereCondition,
      include: includeOptions
    });

    if (!data.length) {
      return res.status(404).json({ _errors: { message: ["Data not found"] } });
    }

    let arr = [];
    let number = 0;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    // Helper -> Build full name
    const fullName = (item) =>
      [item.first_name, item.middle_name, item.last_name]
        .filter(Boolean)
        .join(" ")
        .trim();

    // Helper for row creation
    const buildRow = (item) => {
      let row = { no: ++number, name: fullName(item) }; // name always included

      fields.forEach(f => {
        switch (f) {
          case "national_id_no":
            row.national_id_no = item.national_id_no;
            break;
          case "date_of_birth":
            row.date_of_birth = item.date_of_birth;
            break;
          case "gender":
            row.gender = item.gender;
            break;
          case "phone_no":
            row.phone_no = item.phone_no;
            break;
          case "email":
            row.email = item.email;
            break;
          // case "type":
          //   row.type = item.professionaltype ? item.professionaltype.title : "";
          //   break;
          // case "category":
          //   row.category = item.professionalcategory ? item.professionalcategory.title : "";
          //   break;
          // case "subcategory":
          //   row.subcategory = item.professionalsubcategory ? item.professionalsubcategory.title : "";
          //   break;
          case "center":
            row.center = item.department ? item.department.name : "";
            break;
        }
      });

      return row;
    };

    // ============================
    //          PDF EXPORT
    // ============================
    if (format === "pdf") {

      if (fields.length === 0) {
        arr = data.map(item => ({
          no: ++number,
          name: fullName(item),
          type: item.professionaltype ? item.professionaltype.title : "",
          category: item.professionalcategory ? item.professionalcategory.title : "",
          subcategory: item.professionalsubcategory ? item.professionalsubcategory.title : "",
          center: item.department ? item.department.name : ""
        }));
      } else {
        arr = data.map(buildRow);
      }

      const pdfBuffer = await self.exportToPDF(arr, "Professionals");
      const fileName = `professionals_${timestamp}.pdf`;

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`
      );
      return res.send(pdfBuffer);
    }

    // ============================
    //          EXCEL EXPORT
    // ============================
    else {
      if (fields.length === 0) {
        arr = data.map(item => ({
          no: ++number,
          name: fullName(item),
          type: item.professionaltype ? item.professionaltype.title : "",
          category: item.professionalcategory ? item.professionalcategory.title : "",
          subcategory: item.professionalsubcategory ? item.professionalsubcategory.title : "",
          center: item.department ? item.department.name : "",
          national_id_no: item.national_id_no,
          date_of_birth: item.date_of_birth,
          gender: item.gender,
          phone_no: item.phone_no,
          email: item.email
        }));
      } else {
        arr = data.map(buildRow);
      }

      const excelBuffer = await self.exportToExcel(arr, "Professionals");
      const fileName = `professionals_${timestamp}.xlsx`;

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


self.exportDocument = async (req, res) => {
  try {

    let exports = req.query.export;
    let format = exports?.format || "excel";

    let fields = exports?.fields || [];

    // If fields come as string → parse JSON
    if (typeof fields === "string") {
      try { fields = JSON.parse(fields); } catch { fields = []; }
    }

    // Clean whitespace & ALWAYS remove name (added by default)
    fields = fields.map(f => f.trim()).filter(f => f !== "name");

    let usr = await usrData.userData(req, res);

    const whereCondition = {
      department_id: usr.departmentID
    };

    const includeOptions = [
      { model: DocumentType, as: "documenttype" },
      { model: DocumentCategory, as: "documentcategory" },
      { model: DocumentSubCategory, as: "documentsubcategory" },
      { model: Department, as: "department" }
    ];

    const paginatedResult = await paginationHelper(Document, req, whereCondition, includeOptions);
    let data = paginatedResult.data;

    if (!data.length) {
      return res.status(404).json({ _errors: { message: ["Data not found"] } });
    }

    let arr = [];
    let number = 0;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    // Helper for field selection
    const buildRow = (item) => {
      let row = { no: ++number, name: item.name?.trim() }; // name always included

      fields.forEach(f => {
        switch (f) {
          case "type":
            row.type = item.documenttype ? item.documenttype.title : "";
            break;
          case "category":
            row.category = item.documentcategory ? item.documentcategory.title : "";
            break;
          case "subcategory":
            row.subcategory = item.documentsubcategory ? item.documentsubcategory.title : "";
            break;
          case "center":
            row.center = item.department ? item.department.name : "";
            break;
          case "author":
            row.author = item.author;
            break;
          case "edition":
            row.edition = item.edition;
            break;
          case "publication_date":
            row.publication_date = item.publication_date;
            break;
          case "isbn":
            row.isbn = item.isbn;
            break;
        }
      });
      return row;
    };

    // ============================
    //            PDF EXPORT
    // ============================
    if (format === "pdf") {

      if (fields.length === 0) {
        arr = data.map(item => ({
          no: ++number,
          name: item.name,
          type: item.documenttype ? item.documenttype.title : "",
          category: item.documentcategory ? item.documentcategory.title : "",
          subcategory: item.documentsubcategory ? item.documentsubcategory.title : "",
          center: item.department ? item.department.name : ""
        }));
      } else {
        arr = data.map(buildRow);
      }

      const pdfBuffer = await self.exportToPDF(arr, "Documents");
      const fileName = `documents_${timestamp}.pdf`;

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(pdfBuffer);
    }

    // ============================
    //            EXCEL EXPORT
    // ============================
    else {

      if (fields.length === 0) {
        arr = data.map(item => ({
          no: ++number,
          name: item.name,
          type: item.documenttype ? item.documenttype.title : "",
          category: item.documentcategory ? item.documentcategory.title : "",
          subcategory: item.documentsubcategory ? item.documentsubcategory.title : "",
          center: item.department ? item.department.name : "",
          author: item.author,
          edition: item.edition,
          publication_date: item.publication_date,
          isbn: item.isbn
        }));
      } else {
        arr = data.map(buildRow);
      }

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


self.exportResource = async (req, res) => {
  try {

    let exports = req.query.export;
    let format = exports?.format || "excel";

    let fields = exports?.fields || [];

    // If fields come as string → parse JSON
    if (typeof fields === "string") {
      try { fields = JSON.parse(fields); } catch { fields = []; }
    }

    // Remove whitespace
    fields = fields.map(f => f.trim()).filter(f => f !== "name"); // name removed (added by default)

    let usr = await usrData.userData(req, res);



    const whereCondition = { department_id: usr.departmentID };

    const includeOptions = [
      { model: ResourceType, as: "resourceType" },
      { model: ResourceCategory, as: "resourceCategory" },
      { model: ResourceSubCategory, as: "resourceSubCategory" },
      { model: Department, as: "department" },
      { model: ResourceMasterData, as: "quantityMeasurement", foreignKey: "quantity_measurement_unit_id" },
      { model: ResourceMasterData, as: "qualityMeasurement", foreignKey: "quality_measurement_unit_id" }
    ];

    const paginatedResult = await paginationHelper(Resource, req, whereCondition, includeOptions);
    let data = paginatedResult.data;
    
    if (data.length === 0) {
      return res.status(404).json({ _errors: { message: ["Data not found"] } });
    }

    let arr = [];
    let number = 0;

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    // Helper for field-based row building
    const buildRow = (item) => {
      let row = { no: ++number, name: item.name?.trim() }; // name always included

      fields.forEach(f => {
        switch (f) {
          case "type":
            row.type = item.resourceType ? item.resourceType.title : "";
            break;
          case "category":
            row.category = item.resourceCategory ? item.resourceCategory.title : "";
            break;
          case "subcategory":
            row.subcategory = item.resourceSubCategory ? item.resourceSubCategory.title : "";
            break;
          case "center":
            row.center = item.department ? item.department.name : "";
            break;
          case "quantity_measurement_unit":
            row.quantity_measurement_unit = item.quantityMeasurement ? item.quantityMeasurement.title : "";
            break;
          case "quality_measurement_unit":
            row.quality_measurement_unit = item.qualityMeasurement ? item.qualityMeasurement.title : "";
            break;
        }
      });

      return row;
    };

    // ============================
    //            PDF EXPORT
    // ============================
    if (format === "pdf") {

      if (fields.length === 0) {
        arr = data.map(item => ({
          no: ++number,
          name: item.name,
          type: item.resourceType ? item.resourceType.title : '',
          category: item.resourceCategory ? item.resourceCategory.title : '',
          subcategory: item.resourceSubCategory ? item.resourceSubCategory.title : '',
          center: item.department ? item.department.name : ''
        }));
      } else {
        arr = data.map(buildRow);
      }

      const pdfBuffer = await self.exportToPDF(arr, "Resources");
      const fileName = `resources_${timestamp}.pdf`;

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(pdfBuffer);
    }

    // ============================
    //            EXCEL EXPORT
    // ============================
    else {

      if (fields.length === 0) {
        arr = data.map(item => ({
          no: ++number,
          name: item.name,
          type: item.resourceType ? item.resourceType.title : '',
          category: item.resourceCategory ? item.resourceCategory.title : '',
          subcategory: item.resourceSubCategory ? item.resourceSubCategory.title : '',
          center: item.department ? item.department.name : '',
          quantity_measurement_unit: item.quantityMeasurement ? item.quantityMeasurement.title : '',
          quality_measurement_unit: item.qualityMeasurement ? item.qualityMeasurement.title : ''
        }));
      } else {
        arr = data.map(buildRow);
      }

      const excelBuffer = await self.exportToExcel(arr, "Resources");
      const fileName = `resources_${timestamp}.xlsx`;

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(excelBuffer);
    }

  } catch (error) {
    res.apiError(error);
  }
};


self.exportStakeholder = async (req, res) => {
  try {
    let exports = req.query.export;
    let format = exports.format || "excel";

    let fields = req.query.export?.fields || [];

    // If fields come as string → parse JSON
    if (typeof fields === "string") {
      try {
        fields = JSON.parse(fields);
      } catch {
        fields = [];
      }
    }

    // Remove whitespace
    fields = fields.map(f => f.trim());

    // ⭐ Always include 'name' when custom fields exist
    if (fields.length > 0 && !fields.includes("name")) {
      fields.unshift("name");
    }

    let usr = await usrData.userData(req, res);

    const whereCondition = { department_id: usr.departmentID };

    const includeOptions = [
      { model: StakeholderType, as: "stakeholdertype" },
      { model: StakeholderCategory, as: "stakeholdercategory" },
      { model: StakeholderSubCategory, as: "stakeholdersubcategory" },
      { model: Department, as: "department" }
    ];

    const paginatedResult = await paginationHelper(Stakeholder,req,whereCondition,includeOptions);

    let data = paginatedResult.data;

    if (!data.length) {
      return res.status(404).json({
        _errors: { message: ["Data not found"] }
      });
    }

    let arr = [];
    let number = 0;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    // Helper to build row dynamically
    const buildRow = (item) => {
      const row = { no: ++number, name: item.trade_name?.trim() };

      fields.forEach(f => {
        switch(f) {
          case "type":
            row.type = item.stakeholdertype ? item.stakeholdertype.title : '';
            break;
          case "category":
            row.category = item.stakeholdercategory ? item.stakeholdercategory.title : '';
            break;
          case "subcategory":
            row.subcategory = item.stakeholdersubcategory ? item.stakeholdersubcategory.title : '';
            break;
          case "center":
            row.center = item.department ? item.department.name : '';
            break;
          case "tin":
            row.tin = item.tin;
            break;
          case "origin":
            row.origin = item.origin;
            break;
          case "license_issued_date":
            row.license_issued_date = item.license_issued_date;
            break;
        }
      });

      return row;
    };

    // --------------------------
    //         PDF EXPORT
    // --------------------------
    if (format === "pdf") {
      if (fields.length === 0) {  // full PDF export
        arr = data.map(item => ({
          no: ++number,
          name: item.trade_name,
          type: item.stakeholdertype ? item.stakeholdertype.title : "",
          category: item.stakeholdercategory ? item.stakeholdercategory.title : "",
          subcategory: item.stakeholdersubcategory ? item.stakeholdersubcategory.title : "", 
          tin: item.tin,
          origin: item.origin
        }));
      } else {
        arr = data.map(buildRow);
      }

      const pdfBuffer = await self.exportToPDF(arr, "Stakeholders");
      const fileName = `stakeholders_${timestamp}.pdf`;

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(pdfBuffer);
    }

    // --------------------------
    //         EXCEL EXPORT
    // --------------------------
    if (format === "excel") {
      if (fields.length === 0) {  // full Excel export
        arr = data.map(item => ({
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
      } else {
        arr = data.map(buildRow);
      }

      const excelBuffer = await self.exportToExcel(arr, "Stakeholders");
      const fileName = `stakeholders_${timestamp}.xlsx`;

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(excelBuffer);
    }

  } catch (error) {
    res.apiError(error);
  }
};


 self.exportProject = async (req, res) => {
  try {
    let exports = req.query.export;
   let format = exports.format || "excel";

    let fields = req.query.export?.fields || [];

    // If fields come as string → parse JSON
    if (typeof fields === "string") {
      try {
        fields = JSON.parse(fields);
      } catch {
        fields = [];
      }
    }

    // Remove spaces
    fields = fields.map(f => f.trim());

    // ⭐ Always include 'name' if custom fields passed
    if (fields.length > 0 && !fields.includes("name")) {
      fields.unshift("name");
    }

    let usr = await usrData.userData(req, res);

    const whereCondition = { department_id: usr.departmentID };

    const includeOptions = [
      { model: ProjectType, as: "projecttype" },
      { model: ProjectCategory, as: "projectcategory" },
      { model: ProjectSubCategory, as: "projectsubcategory" },
      { model: Department, as: "department" }
    ];

    const paginatedResult = await paginationHelper(Project, req, whereCondition, includeOptions);
    let data = paginatedResult.data;

    if (data.length === 0) {
      return res.status(404).json({
        _errors: { message: ["Data not found"] }
      });
    }

    let arr = [];
    let number = 0;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    // Helper function for building row dynamically
    const buildRow = (item) => {
      const row = { no: ++number, name: item.name?.trim() };

      // Only loop if user selected fields (other than name)
      fields.forEach(f => {
        switch(f) {
          case "type":
            row.type = item.projecttype ? item.projecttype.title : '';
            break;
          case "category":
            row.category = item.projectcategory ? item.projectcategory.title : '';
            break;
          case "sub_category":
            row.subcategory = item.projectsubcategory ? item.projectsubcategory.title : '';
            break;
          case "end_user":
            row.end_user = item.end_user;
            break;
          case "center":
            row.center = item.department ? item.department.name : '';
            break;
          case "grade":
            row.grade = item.grade;
            break;
          case "function":
            row.function = item.function;
            break;
          case "contract_no":
            row.contract_no = item.contract_no;
            break;
          case "budget_code":
            row.budget_code = item.budget_code;
            break;
          case "procurement_no":
            row.procurement_no = item.procurement_no;
            break;
        }
      });

      return row;
    };

    // --------------------------
    //        PDF EXPORT
    // --------------------------
    if (format === "pdf") {
      if (fields.length === 0) {  // Export all default fields
        arr = data.map(item => ({
          no: ++number,
          name: item.name,
          type: item.projecttype ? item.projecttype.title : "",
          category: item.projectcategory ? item.projectcategory.title : "",
          subcategory: item.projectsubcategory ? item.projectsubcategory.title : "",
          end_user: item.end_user
        }));
      } else {
        arr = data.map(buildRow);
      }

      const pdfBuffer = await self.exportToPDF(arr, "Project");
      const fileName = `projects_${timestamp}.pdf`;

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(pdfBuffer);
    }

    // --------------------------
    //        EXCEL EXPORT
    // --------------------------
    if (format === "excel") {
      if (fields.length === 0) {  // Export all default fields
        arr = data.map(item => ({
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
      } else {
        arr = data.map(buildRow);
      }

      const excelBuffer = await self.exportToExcel(arr, "Projects");
      const fileName = `projects_${timestamp}.xlsx`;

      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.send(excelBuffer);
    }

  } catch (error) {
    res.apiError(error);
  }
};



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
