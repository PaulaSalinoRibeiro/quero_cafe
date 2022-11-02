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

export { GET_PRODUCTS }