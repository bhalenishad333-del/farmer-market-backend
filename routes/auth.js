const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async(req,res)=>{

 const hashed = await bcrypt.hash(req.body.password,10)

 const user = new User({
  name:req.body.name,
  email:req.body.email,
  password:hashed,
  role:req.body.role,
  contact: req.body.contact,
  location: req.body.location
 })

 await user.save()
 res.json(user)
})

router.post('/login', async(req,res)=>{

 const user = await User.findOne({email:req.body.email})

 if(!user) return res.send("User not found")

 const valid = await bcrypt.compare(req.body.password,user.password)

 if(!valid) return res.send("Invalid password")

 const token = jwt.sign({id:user._id},"secret")

 res.json({token,user})
})

module.exports = router