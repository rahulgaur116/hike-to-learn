const sequelize = require("../config/connection");
const {User, Flashcard} = require("../models")
const userData = require("./Userdata.json");
const flashCardData = require("./Flashcarddata.json");


const seedData = async ()=>{
    await sequelize.sync({force: true});
const users = await User.bulkCreate(userData,{
    individualHooks: true
} )

console.log("users has been seeded")
const flashCards = await Flashcard.bulkCreate(flashCardData)
console.log("Flashcards has been seeded");

process.exit(0)
}


seedData()