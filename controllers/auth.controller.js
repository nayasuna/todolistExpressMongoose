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
      
      // Check if the password is correct

      /*console.log(user.password, userLogin.password); */
      if (user.password !== userLogin.password) throw new Error("invalid user") 
      
      /*if(!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({message: "invalid user"})
      } */

      // Generate a JWT token
      const token = jwt.sign({id: user._id, email: user.email}, "h76dfh81diapd")
  
      res.json({
        message: "berhasil login",
        userId: user._id,
        token,
      })
    } catch (error) {
      res.json(error.message)
    }
  },

  regis:  async (req, res) => {
    try {
      const {nama_lengkap, username, jenis_kelamin, tanggal_lahir, tempat_lahir, alamat, email, password} = req.body;

      // Check If email already exist
      const user = await User.findOne({email: email});

      if (user) {
        return res.status(400).json({message: "User already exists"});
      }

      // hash the password 
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create ({nama_lengkap, username, jenis_kelamin, tanggal_lahir, tempat_lahir, alamat, email, password: hashedPassword});

      res.status(201).json({message: "User registered successfully"});
    } catch(error) {
      res.status(500).json({error: "Error creating user"});
    }
          /* let data = req.body
          console.log(data);

          let saltRounds = 10
          let hashPassword = bcrypt.hashSync(data.password, saltRounds)

          data.password = hashPassword

          console.log(data); */
  }
};