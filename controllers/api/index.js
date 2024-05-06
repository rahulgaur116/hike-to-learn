const router = require("express").Router();

const flashcardRoutes = require("./flashcardRoutes")


router.use("/flashcard", flashcardRoutes);


module.exports = router;