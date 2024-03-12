import { AboutPageData } from "@/models/about-page.models";
import { getClient } from "../apollo/client";
import { GET_ABOUT_PAGE_DATA } from "@/db/queries/about";

export const getAboutUsData = async () => {
  const { data } = await getClient().query<AboutPageData>({
    query: GET_ABOUT_PAGE_DATA
  });

  const {
    page: {
      aboutContent: {
        text,
        image: {
          sourceUrl
        }
      }
    }
  } = data;

  return {
    text,
    imageUrl: sourceUrl 
  };
}