const router = require("express").Router();


// Created homepage route and login route
router.get("/", (req,res) => {
 
    console.log(req.session.logged_in)
     res.render("homepage",{
       logged_in: req.session.logged_in
     })
 });
 
 router.get("/signup", (req,res) => {
 
     res.render("signup", {
        logged_in: req.session.logged_in
     })
 });
 
 router.get("/login", (req,res) => {
   
     res.render("login", {
        logged_in: req.session.logged_in})
 });
 




 

 router.get("/flashcards", (req,res) => {
 
     res.render("flashcards", {
        logged_in: req.session.logged_in
     })
 });
 
 router.get("/difficulty", (req,res) => {
  
     res.render("difficulty", {
        logged_in: req.session.logged_in
     })
 });


 module.exports = router

