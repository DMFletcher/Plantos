var express = require("express");
var bodyParser = require("body-parser");
//session is necessary for passport to work
var session = require('express-session');
// Requiring passport as we've configured it
var passport = require("passport");
var env = require('dotenv').load();
var models = require('./models');
//load passport strategies
require('./config/passport.js')(passport, models.user);;

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public")); 

var db = require("./models");

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
 
var exphbs = require("express-handlebars");
app.set('views', 'views')//from passport
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});
//Models
var models = require("./models");
//Routes
var authRoute = require('./routes/auth.js')(app);
//load passport strategies
require('./config/passport.js')(passport, models.user);
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});
app.listen(8080, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});
//this functionality is in config
//var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Chronos02",
//     database: "hngplants_db"
// });

// connection.connect(function (err) {
// if (err) throw err;
//     console.log("connected as id " + connection.threadID);
// });

//change force back to true
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});