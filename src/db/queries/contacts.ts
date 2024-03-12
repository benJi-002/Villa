import { gql } from "@apollo/client";

export const GET_CONTACTS_PAGE_DATA = gql`
  query ContactUsPageData {
    page(id: "245", idType: DATABASE_ID) {
      contactUsContent {
        text
      }
    }
    cardsInfo {
      nodes {
        databaseId
        contactUsInfoCard {
          icon {
            altText
            sourceUrl
          }
          subtitle
          title
        }
      }
    }
  }
`;