import { VideoViewBlockData } from "@/models/home.models";
import { getClient } from "../apollo/client";
import { GET_VIDEO_BLOCK_DATA } from "@/db/queries/home";

export const getHomeVideo = async () => {
  const { data } = await getClient().query<VideoViewBlockData>({
    query: GET_VIDEO_BLOCK_DATA
  });

  const {
    page: {
      homeVideo: {
        title,
        videoUrl,
        preview: {
          sourceUrl
        }
      }
    }
  } = data;

  return {title, videoUrl, previewUrl: sourceUrl};
}

