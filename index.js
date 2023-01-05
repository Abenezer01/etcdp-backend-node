const express = require('express');
const polymorphicRoute = require('./routes/module/polymorphic/route');
const userRoute = require('./routes/module/user/route');
const loginRoute = require('./routes/module/auth/route');
const stakeCategory = require('./routes/module/stakeholder/route')
const route_view = require('./routes/route_view');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');


let app = express();
app.use(fileUpload())
app.use(cookieParser());
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'))
app.set('view engine', 'ejs');
app.use("/api", userRoute(express), polymorphicRoute(express), loginRoute(express), stakeCategory(express));
app.use("/", route_view(express));
app.listen(3000, () => {
    console.log('Success running 3000');
});

module.exports = app;