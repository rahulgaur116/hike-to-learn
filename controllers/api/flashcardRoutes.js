const router = require("express").Router();

const {Flashcard} =  require("../../models")



router.post("/", async (req, res) =>{
        try{
            console.log("we have access to this!!!!!!!!!!!!!!! ", req.session.user_id)
            const data = await Flashcard.create({...req.body, user_id:req.session.user_id})
            res.status(200).json(data)
        }catch (err){
            console.log(err)
            res.status(500).json(err)
        }
})

module.exports = router;