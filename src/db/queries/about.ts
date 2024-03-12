import { gql } from "@apollo/client";

export const GET_ABOUT_PAGE_DATA = gql`
  query AboutPageData {
    page(id: "23", idType: DATABASE_ID) {
      aboutContent {
        text
        image {
          sourceUrl
        }
      }
    }
  }
`;