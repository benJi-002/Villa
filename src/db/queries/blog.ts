import { gql } from "@apollo/client";

export const GET_BLOG_PAGE_DATA = gql`
  query BlogPostData(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    posts(
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
          title
          excerpt
          databaseId
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;