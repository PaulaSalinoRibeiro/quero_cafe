import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      flavor
      type
      grind
      description
      price
      image
    }
  }
`

export { GET_PRODUCTS, GET_PRODUCT }