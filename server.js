const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: './.env' })
console.log("ENV:", process.env.MONGO_URI)

const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})


app.use(cors({
  origin: "*"
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))



const auth = require('./routes/auth')
const product = require('./routes/product')

// app.use('/auth',auth)
app.use('/auth', require('./routes/auth'))
app.use('/product', product)
console.log("ENV:", process.env.MONGO_URI)