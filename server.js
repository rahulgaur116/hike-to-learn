const path = require('path');
const express = require('express');
const helpers = require('./utils/helpers');
// ADD SESSION CONST //
const session = require('express-session');
const routes = require("./controllers")
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require("./config/connection")

const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
// once backend, Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));



app.use(routes)

//setup app the listen
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Now listening Running on PORT = ', PORT));
});

