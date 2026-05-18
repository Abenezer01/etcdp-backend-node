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

// 1. IMPORT YOUR AUTH MIDDLEWARE
const { verifyAccessToken } = require("./middleware/auth.middleware"); 
// **NOTE:** Adjust the path above based on where your verifyAccessToken is defined.

let app = express();
app.use(formatResponse);
// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       "script-src": ["'self'", "https://trustedscripts.com"],
//       "object-src": ["'none'"],
//       "upgrade-insecure-requests": [],
//     },
//   })
// );

app.use((req, res, next) => {
  // 1. Prevents Clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // 2. Prevents MIME-type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // 3. Forces HTTPS (HSTS) for 1 year
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // 4. Controls how much info is shared when navigating away
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 5. Basic Content Security Policy (Adjust based on your frontend needs)
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; object-src 'none';");

  // 6. XSS Filter (for older browsers)
  res.setHeader('X-XSS-Protection', '1; mode=block');

  next();
});
app.use(fileUpload());
app.use(cookieParser());
app.use(express.static("public"));
const whitelist = [
  'http://196.189.50.52',       // Production IP
  'http://196.189.50.52:3000',  // React dev port (if applicable)
  'http://196.189.50.52:7400',  // backend (if applicable)
  'http://196.189.50.52:5200',  // socket port (if applicable)
  'http://localhost:3000'       // Local development
];
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // Log blocked origins to monitor for potential attacks
      console.warn(`CORS blocked request from: ${origin}`);
      callback(new Error('Not allowed by CORS: Secure Domain Policy'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Required for secure headers/cookies
  maxAge: 86400 // Cache the preflight response for 24 hours
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.set("view engine", "ejs");

// --- PUBLIC ROUTES (No Token Required) ---

// Assuming /api/v1/auth and /api/v1/accounts contain your login and token refresh endpoints
// These routes MUST be mounted BEFORE the middleware.
app.use("/api/v1/auth", loginRoute(express)); 
app.use(
  "/api/v1",
  loginRoute(express),
); // Duplicated line, kept for consistency but might be redundant


// --- AUTHENTICATION WALL ---

// 2. APPLY THE MIDDLEWARE HERE
// All routes defined after this line will require a valid Access Token.
app.use("/api/v1", verifyAccessToken); 


// --- PROTECTED ROUTES (Token Required) ---
app.use("/api/v1/accounts", loginRoute(express));
app.use("/api/v1/departments", departmentRoute(express));
app.use("/api/v1/masterdata", masterdataRoute(express));
app.use("/api/v1/projects", projectRoute(express));
app.use("/api/v1/infrastructures", infrastructureRoute(express));
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