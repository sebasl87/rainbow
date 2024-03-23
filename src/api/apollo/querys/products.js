import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query products {
    products {
      cod
      name
      quantity
      sizes
      colors {
        hex
      }
      price {
        discount
        subtotal
        total
      }
      photos {
        fileName
        url
      }
      slug
    }
  }
`;
