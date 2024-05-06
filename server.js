const path = require('path');
const express = require('express');
const helpers = require('./utils/helpers');

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
    const body = {
        body: "test"
    }
    res.render("homepage", body)
});

app.get("/login", (req,res) => {
    const body = {
        body: "test"
    }
    res.render("login", body)
});

app.get("/flashcards", (req,res) => {
    const body = {
        body: "test"
    }
    res.render("flashcards", body)
});

app.use(routes)

//setup app the listen
app.listen(PORT, () => console.log('Now listening Running on PORT = ', PORT));

