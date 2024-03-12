import { FunFactsBlockData } from "@/models/home.models";
import { getClient } from "../apollo/client";
import { GET_FUN_FACTS_DATA } from "@/db/queries/home";

export const getFunFacts = async () => {
  const { data } = await getClient().query<FunFactsBlockData>({
    query: GET_FUN_FACTS_DATA
  });

  const {
    achievements: {
      nodes
    }
  } = data;

  const achievements = nodes.map((node) => {
    return {
      homeFunFacts: node.homeAchievements,
      id: node.databaseId
    }
  })

  return achievements.reverse();
}