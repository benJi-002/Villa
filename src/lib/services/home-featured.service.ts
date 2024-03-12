import { FeaturedBlockData } from "@/models/home.models";
import { getClient } from "../apollo/client";
import { GET_FEATURED_BLOCK_DATA } from "@/db/queries/home";

export const getHomeFeatured = async () => {
  const { data } = await getClient().query<FeaturedBlockData>({
    query: GET_FEATURED_BLOCK_DATA
  });

  const {
    featuredBlocks: {
      nodes
    }
  } = data;

  const featured = nodes.map((node) => {
    return {
      homeFeatured: node.homeFeatured
    }
  })

  return featured[0].homeFeatured;
}

