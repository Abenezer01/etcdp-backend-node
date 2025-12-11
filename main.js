const express = require("express");
const polymorphicRoute = require("./routes/module/polymorphic/route");

const projectRoute = require("./routes/module/project/route");
const departmentRoute = require("./routes/module/user/route");
const loginRoute = require("./routes/module/auth/route"); // Contains Login and Token Refresh
const stakeholderRoute = require("./routes/module/stakeholder/route");
const masterdataRoute = require("./routes/module/masterdata/route");

const resourceRoute = require("./routes/module/resource/route");
const documentRoute = require("./routes/module/document/route");
const analyticRoute = require("./routes/module/analytic/route");

const route_view = require("./routes/route_view");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const formatResponse = require("./middleware/formatters/response-formatter");

// 1. IMPORT YOUR AUTH MIDDLEWARE
const { verifyAccessToken } = require("./middleware/auth.middleware"); 
// **NOTE:** Adjust the path above based on where your verifyAccessToken is defined.

let app = express();
app.use(formatResponse);

app.use(fileUpload());
app.use(cookieParser());
app.use(express.static("public"));
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.set("view engine", "ejs");

// --- PUBLIC ROUTES (No Token Required) ---

// Assuming /api/v1/auth and /api/v1/accounts contain your login and token refresh endpoints
// These routes MUST be mounted BEFORE the middleware.
app.use("/api/v1/auth", loginRoute(express)); 
app.use("/api/v1/accounts", loginRoute(express));
app.use(
  "/api/v1",
  loginRoute(express),
); // Duplicated line, kept for consistency but might be redundant


// --- AUTHENTICATION WALL ---

// 2. APPLY THE MIDDLEWARE HERE
// All routes defined after this line will require a valid Access Token.
app.use("/api/v1", verifyAccessToken); 


// --- PROTECTED ROUTES (Token Required) ---

app.use("/api/v1/departments", departmentRoute(express));
app.use("/api/v1/masterdata", masterdataRoute(express));
app.use("/api/v1/projects", projectRoute(express));
app.use("/api/v1/stakeholders", stakeholderRoute(express));
app.use("/api/v1/resource", resourceRoute(express));
app.use("/api/v1/documents", documentRoute(express));
app.use("/api/v1/resources", resourceRoute(express));
app.use("/api/v1/generics", polymorphicRoute(express));
app.use("/api/v1/analytics", analyticRoute(express));

// --- CATCH-ALL / VIEW ROUTE ---
app.use("/", route_view(express));

app.listen(7400, () => {
  console.log("Success running on  7400");
});

module.exports = app;