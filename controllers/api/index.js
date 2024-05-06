const router = require("express").Router();

const flashcardRoutes = require("./flashcardRoutes")
const userRoutes = require("./userRoutes")


router.use("/flashcard", flashcardRoutes);
router.use("/user", userRoutes)


module.exports = router;