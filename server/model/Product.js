const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  flavor: {
    type: String,
  },
  type: {
    type: String,
  },
  grind: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  }
}) 


module.exports = mongoose.model('Product', ProductSchema);