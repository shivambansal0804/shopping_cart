const { Products, Vendors,Users,CartItems } = require('../db')
const express = require('express')
const route = express.Router()

route.get('/', async (req, res) => {
  res.send(await CartItems.findAll({
    include: [Products]
      // .findAll({where :{id: Products.vendorId}}).name]
  }))
})

route.post('/', async (req, res) => {

  const newItem = await CartItems.create({
    quantity: parseFloat(req.body.quantity),
    productId: parseFloat(req.body.productId)
    // Vendors.findOne({ where: {name: req.body.vendor}}).id
})

  res.status(201).redirect('/cart')
  // why/cart is required instead of /

})

module.exports = route