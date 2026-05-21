const express = require("express");
const polymorphicRoute = require("./routes/module/polymorphic/route");

const projectRoute = require("./routes/module/project/route");
const infrastructureRoute = require("./routes/module/infrastructure/route");
const departmentRoute = require("./routes/module/user/route");
const loginRoute = require("./routes/module/auth/route"); // Contains Login and Token Refresh
const stakeholderRoute = require("./routes/module/stakeholder/route");
const masterdataRoute = require("./routes/module/masterdata/route");

const resourceRoute = require("./routes/module/resource/route");
const documentRoute = require("./routes/module/document/route");
const analyticRoute = require("./routes/module/analytic/route");

const route_view = require("./routes/route_view");
const cors = require("cors");
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const formatResponse = require("./middleware/formatters/response-formatter");

// IMPORT YOUR AUTH MIDDLEWARE
const { verifyAccessToken } = require("./middleware/auth.middleware"); 

let app = express();

// Base Middleware Configuration
app.use(formatResponse);

app.use((req, res, next) => {
  // 1. Prevents Clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // 2. Prevents MIME-type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // 3. Forces HTTPS (HSTS) for 1 year
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // 4. Controls how much info is shared when navigating away
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 5. Basic Content Security Policy
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; object-src 'none';");

  // 6. XSS Filter (for older browsers)
  res.setHeader('X-XSS-Protection', '1; mode=block');

  next();
});

app.use(fileUpload());
app.use(cookieParser());
app.use(express.static("public"));

// CORS Settings
const whitelist = [
  'http://196.189.50.52',       // Production IP
  'http://196.189.50.52:3000',  // React dev port
  'http://196.189.50.52:7400',  // backend
  'http://196.189.50.52:5200',  // socket port
  'http://localhost:3000'       // Local development
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked request from: ${origin}`);
      callback(new Error('Not allowed by CORS: Secure Domain Policy'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.set("view engine", "ejs");


// =================================================================
// --- PUBLIC ROUTES (No Token Required) ---
// =================================================================

// Single entry point for Login & Token Refresh endpoints.
// Frontend should hit: POST /api/v1/auth/refresh-token (or your exact sub-route)
app.use("/api/v1/auth", loginRoute(express)); 


// =================================================================
// --- AUTHENTICATION WALL ---
// =================================================================

// Middleware checks Access Token lifecycle. 
// If expired, blocks immediately & emits status 401 with 'ACCESS_TOKEN_EXPIRED'
app.use("/api/v1", verifyAccessToken); 


// =================================================================
// --- PROTECTED ROUTES (Valid Access Token Required) ---
// =================================================================

app.use("/api/v1/departments", departmentRoute(express));
app.use("/api/v1/masterdata", masterdataRoute(express));
app.use("/api/v1/projects", projectRoute(express));
app.use("/api/v1/infrastructures", infrastructureRoute(express));
app.use("/api/v1/stakeholders", stakeholderRoute(express));
app.use("/api/v1/resource", resourceRoute(express)); // Kept for exact routing mapping
app.use("/api/v1/resources", resourceRoute(express));
app.use("/api/v1/documents", documentRoute(express));
app.use("/api/v1/generics", polymorphicRoute(express));
app.use("/api/v1/analytics", analyticRoute(express));


// =================================================================
// --- CATCH-ALL / VIEW ROUTE ---
// =================================================================
app.use("/", route_view(express));

app.listen(7400, () => {
  console.log("Success running on port 7400");
});

module.exports = app;