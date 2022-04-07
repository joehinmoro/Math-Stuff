// require util, path.join, express, querystring.stringify
const { prime, oddEven, arith, expo, features, bmi } = require("./util");
const { join } = require("path");
const express = require("express");
const { stringify } = require("querystring");
const { BMIClass } = require("./util/bmi");

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
        viewTitle: "Arithmetic Calculator",
        viewName: "Arithmetic",
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
        // extract request data and pass to arith func
        const { num1, num2, operator } = req.body;
        const result = arith.calc(num1, num2, operator);
        // embed calc data in query string of redirect url for persistence
        const redirectQueryString = stringify({
            num1,
            num2,
            operator,
            result,
        });
        res.redirect("/arithmetic?" + redirectQueryString);
    } catch (err) {
        console.log(err);
        res.send("404:something went wrong");
    }
});

// get req: bmi route
app.get("/bmi", (req, res) => {
    res.render("bmi", {
        viewTitle: "BMI Calculator",
        viewName: "BMI",
        navLinks: features["name"],
    });
});

// post req: bmi route
app.post("/bmi", (req, res) => {
    // extract request data and pass to bmi func
    const { weight, height } = req.body;
    const bmiResult = bmi.BMICalc(weight, height);
    const bmiClass = bmi.BMIClass(bmiResult);
    const redirectQueryString = stringify({
        weight,
        height,
        bmiResult,
        bmiClass,
    });

    res.redirect("/bmi?" + redirectQueryString);
});

// listen on port 3000
app.listen(3000, () => {
    console.log("listening on port: 3000");
});
