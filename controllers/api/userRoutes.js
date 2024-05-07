const router = require("express").Router();
const session = require("express-session");
const {User} = require("../../models")

//    /api/user
router.post("/",  async(req, res)=>{
    try{
        console.log(req.body)
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

///  /api/user/login
router.post('/login', async (req, res) => {
  console.log("We are in the login routes for user!!!!")
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      console.log("THIS IS USRE DATA = ",userData)
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log("!!!!!!!!")
      const validPassword = await userData.checkPassword(req.body.password);

      console.log("THIS IS PASSWORD = ", validPassword)
    
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;