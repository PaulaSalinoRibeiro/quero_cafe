const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const connect = require('./model/config/connectDB');

const port = process.env.PORT || 800

app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: process.env.NODE_ENV === 'development',
// }))

try {
  connect()
  app.listen(process.env.PORT, () => console.log(`server is listening on port ${port} 🚀`)) 

} catch (error) {
  console.log(error.message)
  process.exit(0)
}

