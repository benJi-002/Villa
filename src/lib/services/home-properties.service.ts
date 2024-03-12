import { PropertiesBlockData } from "@/models/home.models";
import { getClient } from "../apollo/client";
import { GET_PROPERTIES_DATA } from "@/db/queries/home";

export const getHomeProperties = async () => {
  const { data } = await getClient().query<PropertiesBlockData>({
    query: GET_PROPERTIES_DATA
  });

  const {
    propertiesBlock: {
      homeProperties: {
        title
      }
    },
    cards: {
      nodes
    }
  } = data;

  const cards = nodes.map((node) => {
    return {
      cards: node.homeCards,
      slug: node.slug,
      id: node.databaseId
    }
  })

  return {
    title,
    cards: cards.reverse()
  };
}