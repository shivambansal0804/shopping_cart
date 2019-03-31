const express = require('express')
const { Vendors, Products } = require('../db')

const route = express.Router()

route.get('/', async (req, res) => {
  
  let includes = []
  if (req.query.include === 'products') {
    includes.push({
      model: Products,
      attributes: ['id', 'name']
    })
  }
  
  const vendors = await Vendors.findAll({
    include: includes
  })
  
  res.send(vendors)
  
})

route.post('/', async (req, res) => {
  if(req.body.name){
    const newVendor = await Vendors.create({
      name: req.body.name
    })
    
    // res.send(newVendor)
    let includes = []
    
    if (req.query.include === 'products') {
      includes.push({
        model: Products,
        attributes: ['id', 'name']
      })
    }
    
    const vendors = await Vendors.findAll({
      include: includes
    })
    
    res.send(vendors)
    
  }

  if(req.body.delete){
    const id1 = req.body.id
    await Vendors.destroy({
      where: {
        id: id1
       }
      
    })
    let includes = []
    if (req.query.include === 'products') {
    includes.push({
      model: Products,
      attributes: ['id', 'name']
    })
  }
  
  const vendors = await Vendors.findAll({
    include: includes
  })
  
  res.send(vendors)

  }
})

module.exports = route