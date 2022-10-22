const Product = require('../model/Product');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    flavor: { type: GraphQLString },
    type: { type: GraphQLString },
    grind: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    image: { type: GraphQLString },
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return Product.find()
      }
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findOne({ id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})