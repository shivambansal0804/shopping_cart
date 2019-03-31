const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'shoppingdb',
    username: 'shopper',
    password: '1234'
  })
  
  const Vendors = db.define('vendor', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
  })
  
  const Products = db.define('product', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  })
  
  Vendors.hasMany(Products)
  Products.belongsTo(Vendors)
  
  const Users = db.define('user', {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    city: Sequelize.STRING(30),
  })
  
  const CartItems = db.define('cartitem', {
    
    
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    
  })
  
  // CartItems.belongsTo(Users)
  // Users.hasMany(CartItems)
  
  CartItems.belongsTo(Products)
  Products.hasMany(CartItems)
  
  module.exports = {
    db,
  
    Users, Products, Vendors,
    CartItems
  }

//error handling should be done at both clientand server layer
//use postman to send post requsts and check for vendors,users,products etc
//http codes should be send to denote errors