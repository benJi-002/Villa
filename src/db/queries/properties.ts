import { gql } from "@apollo/client";

export const GET_PROPERTIES_CARDS = gql`
  query PropertiesPaginationAndFilter(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $categories: [String]
  ) {
    cards(
      where: {propertyCategory: $categories}
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          databaseId
          slug
          homeCards {
            type
            price
            address
            caracteristics {
              char1
              char2
              char3
              char4
              char5
              descr1
              descr2
              descr3
              descr4
              descr5
            }
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;