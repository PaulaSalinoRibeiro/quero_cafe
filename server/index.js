const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const connect = require('./model/config/connectDB');
const cors = require('cors');
const schema = require('./schema/schema');

const port = process.env.PORT || 800

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development',
}))

try {
  connect()

  app.listen(process.env.PORT, () => console.log(`server is listening on port ${port} 🚀`)) 

} catch (error) {
  console.log(error.message)

  process.exit(0)
}

