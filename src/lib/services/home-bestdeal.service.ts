import { BestDealBlockData } from "@/models/home.models";

export const getHomeBestDeal = ({data}: {
  data: BestDealBlockData
}) => {

  const {
    tabs: {
      nodes
    }
  } = data;

  const tabs = nodes.map((node) => {
    return {
      tabs: node.homeTabs,
      id: node.databaseId
    }
  })

  return tabs.reverse();
}