import { FaqBlockData } from "@/models/home.models";

export const getHomeFAQ = ({data}: {
  data: FaqBlockData
}) => {

  const {
    fAQs: {
      nodes
    }
  } = data;

  const faqs = nodes.map((node) => {
    return {
      homeFAQ: node.homeFAQ,
      id: node.databaseId
    }
  })

  return faqs.reverse();
}