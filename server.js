const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: './.env' })
console.log("ENV:", process.env.MONGO_URI)

const app = express()
const PORT = process.env.PORT || 5000



app.use(cors({
  origin: "*"
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
const cors = require("cors")
const auth = require('./routes/auth')
const product = require('./routes/product')

app.use('/auth',auth)
app.use('/product', product)
console.log("ENV:", process.env.MONGO_URI)