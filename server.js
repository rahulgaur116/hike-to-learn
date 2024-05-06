const path = require('path');
const express = require('express');
const helpers = require('./utils/helpers');
// ADD SESSION CONST //
const session = require('express-session');
const routes = require("./controllers")

const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

// once backend, Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Created homepage route and login route
app.get("/", (req,res) => {
     const logged_in = true
    res.render("homepage", {logged_in})
});

app.get("/signup", (req,res) => {
    const logged_in = true
    res.render("signup", {logged_in})
});

app.get("/login", (req,res) => {
    const logged_in = true
    res.render("login", {logged_in})
});

app.get("/flashcards", (req,res) => {
    const logged_in = true
    res.render("flashcards", {logged_in})
});

app.get("/difficulty", (req,res) => {
    const logged_in = true
    res.render("difficulty", {logged_in})
});

app.use(routes)

//setup app the listen
app.listen(PORT, () => console.log('Now listening Running on PORT = ', PORT));

