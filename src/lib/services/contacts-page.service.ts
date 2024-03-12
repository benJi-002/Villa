import { ContactUsPageData } from "@/models/contacts.models";
import { getClient } from "../apollo/client";
import { GET_CONTACTS_PAGE_DATA } from "@/db/queries/contacts";

export const getContactUsData = async () => {
  const { data } = await getClient().query<ContactUsPageData>({
    query: GET_CONTACTS_PAGE_DATA
  });

  const {
    page: {
      contactUsContent: {
        text
      }
    },
    cardsInfo: {
      nodes
    }
  } = data;

  const cards = nodes.map((node) => {
    return {
      cards: node.contactUsInfoCard,
      id: node.databaseId
    }
  })

  return {
    text,
    cards: cards.reverse()
  };
}