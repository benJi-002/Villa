import { gql } from '@apollo/client';

export const GET_SLIDES_DATA  = gql`
  query SlidesQueryData {
    slides {
      nodes {
        databaseId
        homeSlides {
          subtitle
          title
          photo {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_FEATURED_BLOCK_DATA = gql`
  query FeaturedBlockData {
    featuredBlocks {
      nodes {
        homeFeatured {
          title
          photo {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_FAQ_DATA = gql`
  query FaqBlockData {
    fAQs {
      nodes {
        databaseId
        homeFAQ {
          answer
          question
        }
      }
    }
  }
`;

export const GET_VIDEO_BLOCK_DATA = gql`
  query VideoViewBlockData {
    page(id: "21", idType: DATABASE_ID) {
      homeVideo {
        title
        videoUrl
        preview {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_FUN_FACTS_DATA = gql`
  query FunFactsBlockData {
    achievements {
      nodes {
        databaseId
        homeAchievements {
          description
          icon
          numeric
        }
      }
    }
  }
`;

export const GET_BEST_DEAL_DATA = gql`
  query BestDealBlockData {
    tabs {
      nodes {
        databaseId
        homeTabs {
          charTable {
            char1 {
              label
              value
            }
            char2 {
              label
              value
            }
            char3 {
              label
              value
            }
            char4 {
              label
              value
            }
            char5 {
              label
              value
            }
          }
          mainImage {
            sourceUrl
          }
          tabName
          textDescription
          textTitle
          value
        }
      }
    }
  }
`;

export const GET_PROPERTIES_DATA = gql`
  query PropertiesBlockData {
    propertiesBlock(id: "138", idType: DATABASE_ID) {
      homeProperties {
        title
      }
    }
    cards(last: 6) {
      nodes {
        slug
        databaseId
        homeCards {
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
          price
          type
        }
      }
    }
  }
`;

export const GET_CONTACT_US_DATA = gql`
  query ContactUsData {
    contactUsBlock(idType: DATABASE_ID, id: "222") {
      homeContactUs {
        background {
          sourceUrl
          altText
        }
        title
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

