require("dotenv").config()
const jwt = require('jsonwebtoken');
const User = require("../models/user.model")
const bcrypt = require('bcrypt')


module.exports = {
  login: async (req, res) => {
    const userLogin = req.body 

    try {
      const user = await User.findOne({email: userLogin.email})
      if (!user) throw new Error("invalid user")
  
      console.log(user.password, userLogin.password);
      if (user.password !== userLogin.password) throw new Error("invalid user")
  
      const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY)
  
      res.json({
        message: "berhasil login",
        userId: user._id,
        token,
      })
    } catch (error) {
      res.json(error.message)
    }
  },

  regis: (req, res) => {
    let data = req.body
    console.log(data);

    let saltRounds = 10
    let hashPassword = bcrypt.hashSync(data.password, saltRounds)

    data.password = hashPassword

    console.log(data);
  }
}