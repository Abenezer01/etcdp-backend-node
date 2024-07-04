const { Address, Permission, Project, ActionState, User, Stakeholder, Department} = require("../../models");
const os = require("os");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;


const { createObjectCsvWriter } = require("csv-writer");
const PDFDocument = require("pdfkit");
const { models } = require("../../config/master");
const fs = require("fs");

//table

const PDFDocumentTable = require("pdfkit-table");
const { now } = require("moment");
let self = {};


// self.generateReport = async(req, res) => {

//     const { models, format, attributes } = req.body;
//     let data = {};
//     for (let modelName of models) {
//         if (modelName === "User") {
//         data["User"] = await User.findAll({ attributes: attributes.User });
//         }
//     }


//     if (format === "csv") {
//         generateCSV(data, res);
//     } else if (format === "pdf") {
//         generatePDF(data, res);
//     } else {
//         res.status(400).send("Invalid format");
//     }
// };


// const generateCSV = async (data, res) => {
//     const csvWriters = [];
//     for (let modelName in data) {

//       const csvWriter = createObjectCsvWriter({
//         path: "C:\\path_to_save_videos/${modelName}.csv",
//         header: Object.keys(data[modelName][0].dataValues).map(key => ({ id: key, title: key })),
//       });
//       csvWriters.push(csvWriter.writeRecords(data[modelName].map(instance => instance.dataValues)));
//     }

//     csvWriters.writeRecords(data)       // returns a promise
//     .then(() => {
//         console.log("...Done");
//   });
//     await Promise.all(csvWriters);
//     res.download("C:\\path_to_save_videos/User.csv"); // Send one file as a response for simplicity, handle multiple files as needed
//   };

  // const generatePDF = (data, res) => {
  //   const doc = new PDFDocument();
  //   doc.pipe(res);
  
  //   for (let modelName in data) {
  //     doc.addPage().fontSize(20).text(modelName);
  //     data[modelName].forEach(instance => {
  //       doc.fontSize(12).text(JSON.stringify(instance.dataValues, null, 2));
  //     });
  //   }
  
  //   doc.end();
  // };
  

  
  const formatString = (input) => {
    // Replace underscores with spaces
    let formattedString = input.replace(/_/g, " ");
  
    // Capitalize the first letter of each word
    formattedString = formattedString.replace(/\b\w/g, char => char.toUpperCase());
  
    return formattedString;
  };

  const  getRandomFileName = (modelName, extension = "pdf" ) => {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${modelName}_${randomString}.${extension}`;
  };

//final API func
  self.generateCSV = async (req, res) => {
    const { model, format, attributes } = req.body;
  
    if (format !== "csv") {
      return res.status(400).send("Invalid format");
    }
  
    // Generate the file name
    const fileName = getRandomFileName(model, "csv");
    // Construct the path to the default download directory
    const downloadPath = path.join(os.homedir(), "Downloads", fileName);
  
    // Construct headers
    let headers = [];
    if (attributes){
        headers = attributes.map(attribute => ({
            id: attribute,
            title: formatString(attribute)
          }));
    }else {

    // if attributes are not given, export all
        let attributes = Object.keys(eval(model).rawAttributes);
        for (let index = 0; index < attributes.length; index++) {
            headers.push({id: attributes[index], title: attributes[index]});
        }
    }
    
  
    // Initialize the CSV writer with the dynamic path
    const csvWriter = createObjectCsvWriter({
      path: downloadPath,
      header: headers
    });
  
    // Fetch records from the specified model
    let records = await eval(model).findAll({ attributes });
  
    // Write records to the CSV file
    csvWriter.writeRecords(records)
      .then(() => {
        console.log("CSV file has been created at:", downloadPath);
        res.send(`CSV generated successfully and saved to: ${downloadPath}`);
      })
      .catch(error => {
        console.error("Error writing CSV:", error);
        res.status(500).send("Error generating CSV");
      });
  };

  self.generatePDFx = async (req, res) => {
    let  { model, format, attributes } = req.body;

  if (format !== "pdf") {
    return res.status(400).send("Invalid format");
  }

  // Generate the file name with .pdf extension
  const fileName = getRandomFileName(model, "pdf");
  // Construct the path to the default download directory
  const downloadPath = path.join(os.homedir(), "Downloads", fileName);

  // Fetch records from the specified model
  let records;

  if (attributes && attributes.length > 0) {
    records = await eval(model).findAll({ attributes });
  } else {
    // if attributes are not given, fetch all attributes
    records = await eval(model).findAll({
      attributes: {
        exclude: ["id", "parent_id"]
      },
    });
    attributes = Object.keys(eval(model).rawAttributes); // Ensure attributes are set for headers
    attributes.splice(0, 1);
    attributes.splice(-2, 2);
  }


  // Create a new PDF document
  const doc = new PDFDocument();

  // Pipe its output to a file
  doc.pipe(fs.createWriteStream(downloadPath));

  // Add a title
  doc.fontSize(18).text(`${model} Report`, { align: "center" });

  // Add a table header
  doc.moveDown().fontSize(12);

  // Define column positions
  const columnWidth = 150;
  let x = doc.x, y = doc.y;

  attributes.forEach((header, i) => {
    doc.text(formatString(header), x + i * columnWidth, y);
  });

  y += 20; // Move down for the first row of data

  // Add table rows
  records.forEach(record => {
    attributes.forEach((header, i) => {
      doc.text(record[header] || "", x + i * columnWidth, y);
    });
    y += 20; // Move down for the next row of data
  });

  // Finalize the PDF and end the stream
  doc.end();

  // Send response
  doc.on("finish", function() {
    console.log("PDF file has been created at:", downloadPath);
    res.send(`PDF generated successfully and saved to: ${downloadPath}`);
  });

  // Error handling
  doc.on("error", function(error) {
    console.error("Error writing PDF:", error);
    res.status(500).send("Error generating PDF");
  });
  };



  self.generatePDF = async (req, res) => {
    let { model, format, attributes } = req.body;
  
    if (format !== "pdf") {
      return res.status(400).send("Invalid format");
    }
  
    // Generate the file name with .pdf extension
    const fileName = getRandomFileName(model, "pdf");
    // Construct the path to the default download directory
    const downloadPath = path.join(os.homedir(), "Downloads", fileName);
  
    // Fetch records from the specified model
    let records;
    if (attributes && attributes.length > 0) {
      records = await eval(model).findAll({ attributes });
    } else {
      // if attributes are not given, fetch all attributes

      const allAttributes = Object.keys(eval(model).rawAttributes);

      // Filter out attributes ending with "id"
      attributes = allAttributes.filter(attr => !attr.endsWith("id"));
      
      attributes.splice(-2, 2);
      records = await eval(model).findAll({
        attributes: attributes
      });
    
    }
  
    // Create a new PDF document
    const doc = new PDFDocument();
  
    // Pipe its output to a file
    doc.pipe(fs.createWriteStream(downloadPath));
  
    // Add a title
    doc.fontSize(18).text(`${model} Report`, { align: "center" });
  
    // Add a table header
    doc.moveDown().fontSize(12);
  
    // Define column positions
    const columnWidth = 200;
    const rowHeight = 20;
    const maxY = doc.page.height - 50; // Leave some margin at the bottom
    let x = doc.x, y = doc.y;
  
    function addTableHeader() {
      attributes.forEach((header, i) => {
        doc.text(formatString(header), x + i * columnWidth, y);
      });
      y += rowHeight; // Move down for the first row of data
    }
  
    function addNewPage() {
      doc.addPage();
      y = 50; // Reset y-coordinate to top of the new page
      addTableHeader();
    }
  
    // Add the initial table header
    addTableHeader();
  
    // Add table rows
    records.forEach(record => {
      if (y + rowHeight > maxY) {
        addNewPage();
      }
      attributes.forEach((header, i) => {
        doc.text(record[header] || "", x + i * columnWidth, y);
      });
      y += rowHeight; // Move down for the next row of data
    });
  
    // Finalize the PDF and end the stream
    doc.end();
  
    // Send response
    doc.on("finish", function() {
      console.log("PDF file has been created at:", downloadPath);
      res.send(`PDF generated successfully and saved to: ${downloadPath}`);
    });
  
    // Error handling
    doc.on("error", function(error) {
      console.error("Error writing PDF:", error);
      res.status(500).send("Error generating PDF");
    });
  };
// self.generateCSV = async(req, res) => {

//     const { model, format, attributes } = req.body;
    
  
//     let headers = [];
        
    
//     for (let index = 0; index < attributes.length; index++) {
//         headers.push({id: attributes[index], title: formatString(attributes[index])});
//     }

//     const csvWriter = createCsvWriter({
//       path: "C:\\path_to_save_videos/filecx.csv",
//       header: headers
//     });
   
//     let records = await eval(model).findAll();

   
//     csvWriter.writeRecords(records) // returns a promise
//       .then(() => {
//         console.log("...Done");
//         res.send("CSV generated successfully");
//       })
//       .catch(error => {
//         console.error("Error writing CSV:", error);
//         res.status(500).send("Error generating CSV");
//       });
  
//   };

self.generateCSVMultipleModel = async (req, res) => {
    const { models, format } = req.body;
  
    if (format !== "csv") {
      return res.status(400).send("Invalid format");
    }
  
    // Gather all headers
    let headers = [];
    let modelData = {};
  
    for (let modelObj of models) {
      const { name, attributes } = modelObj;
  
      // Add headers for the model"s attributes
      attributes.forEach(attribute => {
        headers.push({ id: `${name}_${attribute}`, title: formatString(attribute) });
      });
  
      // Fetch records from the model
      const records = await eval(name).findAll({ attributes });
      modelData[name] = records.map(record => record.get({ plain: true }));
    }
  
    // Combine records into one list, filling in empty cells as needed
    let combinedRecords = [];
    let maxLength = Math.max(...Object.values(modelData).map(records => records.length));
  
    for (let i = 0; i < maxLength; i++) {
      let row = {};
      models.forEach(modelObj => {
        const { name, attributes } = modelObj;
        let record = modelData[name][i] || {};
  
        attributes.forEach(attribute => {
          row[`${name}_${attribute}`] = record[attribute] || "";
        });
      });
      combinedRecords.push(row);
    }
  
    const csvWriter = createObjectCsvWriter({
      path: "C:\\path_to_save_videos\\filecx.csv",
      header: headers
    });
  
    csvWriter.writeRecords(combinedRecords) // returns a promise
      .then(() => {
        console.log("...Done");
        res.send("CSV generated successfully");
      })
      .catch(error => {
        console.error("Error writing CSV:", error);
        res.status(500).send("Error generating CSV");
      });
  };
self.generateCcSV = async(req, res, model) => {

    // const { models, format, attributes } = req.body;

    // models.forEach(model => {
        
    // });
    let attributes = Object.keys(Project.rawAttributes);

    // return 

    // array.forEach(element => {
        
    // });

    let headers = [];

    for (let index = 0; index < attributes.length; index++) {
        headers.push({id: attributes[index], title: attributes[index]});
    }

    return res.json(headers);

    // return res.json(headers);
    const csvWriter = createCsvWriter({
        path: "C:\\path_to_save_videos/filecx.csv",
        header: headers
    });
    
    let records = await eval(model).findAll();
    
    csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
            console.log("...Done");
    });
 

};

// a working func

// self.generate = async(req, res) => {
//   try {
    
//     // Create a document
//     const doc = new PDFDocument();
//     let model = "User";

//     // Pipe its output somewhere, like to a file or HTTP response
//     // See below for browser usage
//     doc.pipe(fs.createWriteStream(getRandomFileName("model", "pdf")));

//     // Embed a font, set the font size, and render some text
//     doc
//       .font("fonts/PalatinoBold.ttf")
//       .fontSize(25)
//       .text(`${model} Report`, 100, 100);

//     // Add an image, constrain it to a given size, and center it vertically and horizontally
//     doc.image("public/image.png", {
//       fit: [250, 300],
//       align: "center",
//       valign: "center"
//     });

//     // Add another page
//     doc
//       .addPage()
//       .fontSize(25)
//       .text("Here is some vector graphics...", 100, 100);

//     // Draw a triangle
//     doc
//       .save()
//       .moveTo(100, 150)
//       .lineTo(100, 250)
//       .lineTo(200, 250)
//       .fill("#FF3300");

//     // Apply some transforms and render an SVG path with the "even-odd" fill rule
//     doc
//       .scale(0.6)
//       .translate(470, -380)
//       .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
//       .fill("red", "even-odd")
//       .restore();

//     // Add some text with annotations
//     doc
//       .addPage()
//       .fillColor("blue")
//       .text("Onespace ECDMS", 100, 100)
//       .underline(100, 100, 160, 27, { color: "#0000FF" })
//       .link(100, 100, 160, 27, "http://etcdp.onespace.et/");

//     // Finalize PDF file
//     doc.end();
//   } catch (error) {
//     return res.json(error);
//   }
// };

self.generate = async(req, res) => {
  try {


    let { model, format, attributes } = req.body;
  
    if (format !== "pdf") {
      return res.status(400).send("Invalid format");
    }
  
    // Generate the file name with .pdf extension
    const fileName = getRandomFileName(model, "pdf");
    const downloadPath = path.join(os.homedir(), "Downloads", fileName);

  
    // Fetch records from the specified model
    let records;
    if (attributes && attributes.length > 0) {
      records = await eval(model).findAll({ attributes });

    } else {
      // if attributes are not given, fetch all attributes

      const allAttributes = Object.keys(eval(model).rawAttributes);

      // Filter out attributes ending with "id"
      attributes = allAttributes.filter(attr => !attr.endsWith("id"));
      attributes.splice(-2, 2);
      records = await eval(model).findAll({
        attributes: attributes
      });
    
    }


    let results = [];

     for(let item of records) {
      let arr = [];
      for(let attr of attributes){

        arr.push(item[attr]);
      }
      results.push(arr);
     }



     const headers = attributes.map(attr => ({
      label: toReadableFormat(attr),
      property: attr,
    }));

    const doc = new PDFDocumentTable({ margin: 30, size: "A4" });
    doc.pipe(fs.createWriteStream(downloadPath));
    
    // Add the logo at the top of the document
    const logoPath = path.join(__dirname, "../../public/image.png"); // Update with the actual path to your logo
    const logoWidth = 150; // Adjust the width as needed
    const logoHeight = 50; // Adjust the height as needed
    doc.image(logoPath, doc.page.width / 2 - logoWidth / 2, 15, { width: logoWidth, height: logoHeight });
    // Add the company name below the logo
    doc.moveDown(3); // Adjust the spacing as needed
    doc.fontSize(10).text("Ministry of Urban and Infrastructure", { align: "center" });

    // Move down to make space for the table after the company name
    doc.moveDown(2);

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();


    const table = {
      title: `${model} Report`,
      subtitle: `${formattedDate}`,
      headers: headers,
      rows: results,
    };

    
    doc.table(table, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
      // prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
      //   doc.font("Helvetica").fontSize(8);
      //   if (indexColumn === 0) {
      //     doc.addBackground(rectRow, "blue", 0.15);
      //   }
      // },
    });

    doc.end();

    res.status(200).send(`File saved to ${downloadPath}`);
 
    
  } catch (error) {
    return res.json(error);
  }
};

const toReadableFormat = (str) => {
  return str.split("_") // Split by underscores
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(" "); // Join the words with spaces
};

module.exports = self;
