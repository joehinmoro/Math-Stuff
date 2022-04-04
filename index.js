// require util, path.join, express, ejs
const { data, prime, oddEven, calc, expo } = require("./util");
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

// *** ROUTES ***
// get root route
app.get("/", (req, res) => {
    res.redirect("/arithmetic");
});

app.get("/arithmetic", (req, res) => {
    res.render("arithmetic", {
        title: "Arithmetic",
        navLinks: data["views"],
    });
});

// listen on port 3000
app.listen(3000, () => {
    console.log("listening on port: 3000");
});
