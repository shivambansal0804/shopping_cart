const express = require('express')
const { Products, Vendors } = require('../db')

const route = express.Router()

route.get('/', async (req, res) => {
  res.send(await Products.findAll({
    include: [Vendors]
      // .findAll({where :{id: Products.vendorId}}).name]
  }))
})

route.post('/', async (req, res) => {

  const newProd = await Products.create({
    name: req.body.name,
    price: parseFloat(req.body.price),
    quantity: parseFloat(req.body.quantity),
    vendorId: parseFloat(req.body.vendorId)
    // Vendors.findOne({ where: {name: req.body.vendor}}).id
})

  res.status(201).redirect('/')

})

module.exports = route