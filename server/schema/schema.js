const Product = require('../model/Product');
const { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLList, 
  GraphQLSchema,
  GraphQLNonNull,
 } = require('graphql');

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
        return Product.findById(args.id)
      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        flavor: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
        grind: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const product = new Product({ 
          name: args.name, 
          flavor: args.flavor,
          type: args.type,
          grind: args.grind,
          description: args.description,
          price: args.price,
          image: args.image
        })
        return product.save()
      }
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})