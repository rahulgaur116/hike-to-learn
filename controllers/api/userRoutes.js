const router = require("express").Router();
const session = require("express-session");
const {User} = require("../../models")

//    /api/user
router.post("/",  async(req, res)=>{
    try{
        const userInfo = await User.create(req.body)
        console.log("this works")
        req.session.save(()=>{
            req.session.email = userInfo.email,
            req.session.user_id  =  userInfo.user_id;
            req.session.loggedin_id = true;
            res.status(200).json(userInfo)
        })
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;