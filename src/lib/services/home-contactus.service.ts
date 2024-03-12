import { ContactUsData } from "@/models/home.models";
import { getClient } from "../apollo/client";
import { GET_CONTACT_US_DATA } from "@/db/queries/home";

export const getHomeContactUs = async () => {
  const { data } = await getClient().query<ContactUsData>({
    query: GET_CONTACT_US_DATA
  });

  const {
    contactUsBlock: {
      homeContactUs: {
        title,
        background: {
          sourceUrl
        }
      }
    },
    cardsInfo: {
      nodes
    }
  } = data;

  const cardsInfo = nodes.map((node) => {
    return {
      cardsInfo: node.contactUsInfoCard,
      id: node.databaseId
    }
  })

  return {
    title,
    background: sourceUrl,
    cardsInfo: cardsInfo.reverse()
  };
}