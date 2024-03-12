import { gql } from "@apollo/client";

export const GET_PROPERTY = gql`
  query GetProperty($slug: ID!) {
    card(id: $slug, idType: SLUG) {
      homeCards {
        address
        infoTable {
          contractReady
          paymentProcess
          totalSpace
          underControl
        }
        description
        type
        image {
          sourceUrl
        }
      }
    }
  }
`;