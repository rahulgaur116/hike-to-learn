const router = require("express").Router();

const {Flashcard} =  require("../../models")



router.post("/", async (req, res) =>{
        try{
            const data = await Flashcard.create(req.body)
            res.status(200).json(data)
        }catch (err){
            console.log(err)
            res.status(500).json(err)
        }
})

module.exports = router;