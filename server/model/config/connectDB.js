const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
  const conect_mongo = await mongoose.connect(process.env.MONGO_URI)

  console.log(`Mongo connection in ${conect_mongo.connection.host} 🍃`)
}

module.exports = connect