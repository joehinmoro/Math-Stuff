// require util, path.join, express, ejs,url
const { prime, oddEven, arith, expo, features, bmi } = require("./util");
const { join } = require("path");
const express = require("express");
const url = require("url");

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
    const { result } = req.query;
    console.log(result);
    // render arithmetic view, pass title and navlinks
    res.render("arithmetic", {
        title: "Arithmetic",
        navLinks: features["name"],
        result,
    });
});

// post req: arithemtic route
app.post("/arithmetic", (req, res) => {
    // extract operands and operator and pass to arith func
    const { num1, num2, operator } = req.body;
    const result = arith.calc(num1, num2, operator);
    // !!!deprecated
    // const redirectURL = url.format({
    //     pathname: "/arithmetic",
    //     query: {
    //         num1,
    //         num2,
    //         result,
    //     },
    // });

    res.redirect(redirectURL);
});

// listen on port 3000
app.listen(3000, () => {
    console.log("listening on port: 3000");
});
