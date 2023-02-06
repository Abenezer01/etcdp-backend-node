const express = require('express');
const polymorphicRoute = require('./routes/module/polymorphic/route');
const userRoute = require('./routes/module/user/route');
const loginRoute = require('./routes/module/auth/route');
const stakeCategory = require('./routes/module/stakeholder/route')
const ProjectRoute = require('./routes/module/project/route')
const route_view = require('./routes/route_view');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');


let app = express();
app.use(fileUpload())
app.use(cookieParser());

var corsOptions = {
    origin: "*",
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'))
app.set('view engine', 'ejs');
app.use("/api", userRoute(express), polymorphicRoute(express), loginRoute(express), stakeCategory(express), ProjectRoute(express));
app.use("/", route_view(express));
app.listen(7500, () => {
    console.log('Success running 7500');
});

module.exports = app;