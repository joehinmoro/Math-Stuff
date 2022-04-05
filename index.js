// require util, path.join, express, querystring.stringify
const { prime, oddEven, arith, expo, features, bmi } = require("./util");
const { join } = require("path");
const express = require("express");
const { stringify } = require("querystring");

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
// get req: root route
app.get("/", (req, res) => {
    // redirect to arithmetic route
    res.redirect("/arithmetic");
});

// get arithmetic route, serve form for calculations
app.get("/arithmetic", (req, res) => {
    const { num1, num2, operator, result } = req.query;
    // console.log(result);
    // render arithmetic view, pass title and navlinks,
    // and recent calc data (if any)
    res.render("arithmetic", {
        title: "Arithmetic",
        navLinks: features["name"],
        num1,
        num2,
        operator,
        result,
    });
});

// post req: arithemtic route
app.post("/arithmetic", (req, res) => {
    try {
        // extract operands and operator and pass to arith func
        const { num1, num2, operator } = req.body;
        const result = arith.calc(num1, num2, operator);
        // embed calc data in query string of redirect url for persistence
        const redirectURL = stringify({ num1, num2, operator, result });
        res.redirect("/arithmetic?" + redirectURL);
    } catch (err) {
        console.log(err);
        res.send("404:something went wrong");
    }
});

// listen on port 3000
app.listen(3000, () => {
    console.log("listening on port: 3000");
});
