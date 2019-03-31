const express = require('express')
const { db } = require('./db')
const app =express()

app.use(express.urlencoded(
    {extended:true}
))
app.use(express.json())
app.use(express.static(__dirname +'/Public'))



const routes = {
    vendors: require('./routes/vendors'),
    products: require('./routes/products'),
    users: require('./routes/users'),
    cart: require('./routes/cart'),
  }
  
  app.use('/vendors', routes.vendors)
  app.use('/products', routes.products)
  app.use('/users', routes.users)
  app.use('/cart', routes.cart)
  
  db.sync({ alter: true })
    .then(() => {
      app.listen(5000, () => {
        console.log('Server started on http://localhost:5000')
      })
    })
    .catch(console.error)
    