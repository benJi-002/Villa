import { gql } from "@apollo/client";

export const GET_POST_DATA = gql`
  query GetPostData($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      content
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;