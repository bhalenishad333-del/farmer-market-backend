const router = require('express').Router()
const Product = require('../models/Product')
const auth = require("../middleware/auth")
const User = require('../models/User')

// Add product
router.post('/add', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      contact: user.contact,
      location: user.location,
      farmerId: user._id
    })

    await product.save()
    res.json(product)

  } catch (err) {
    res.status(500).json(err)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get all products
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router