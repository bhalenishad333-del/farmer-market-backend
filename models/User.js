const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 name:String,
 email:String,
 password:String,
 role:String,
 contact: String,
  location: String
})

module.exports = mongoose.model('User',userSchema)