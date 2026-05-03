const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
 name:String,
 price:Number,
 quantity:Number,
 image:String,
 farmerId:String,
 contact: String,
 location: String

  
})

module.exports = mongoose.model('Product',productSchema)