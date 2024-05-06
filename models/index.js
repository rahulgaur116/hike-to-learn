const User = require("./User");
const Flashcard = require("./Flashcard");


Flashcard.belongsTo(User,{
    foreignKey: "user_id"
})

User.hasMany(Flashcard,{
    foreignKey: "user_id"
})

module.exports ={ User, Flashcard}