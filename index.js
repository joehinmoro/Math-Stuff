// require util, path.join, express, ejs
const util = require("./util");
// console.log(util);
const { join } = require("path");
const express = require("express");

// create express app
const app = express();

// *** APP SETTINGS ***
// set view engine
app.set("view engine", "ejs");
// set views folder
app.set("views", join(__dirname, "views"));

// *** MIDDLEWARE ****
// serve static assets
app.use(express.static(join(__dirname, "public")));
// parse form data from post request
app.use(express.urlencoded({ extended: true }));

// listen on port 3000
app.listen(3000, () => {
    console.log("listening on port: 3000");
});
