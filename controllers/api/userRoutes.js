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

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
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