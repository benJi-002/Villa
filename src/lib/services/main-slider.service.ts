import { SlidesQueryData } from "@/models/home.models";

export const getMainSlider = ({data}: {
  data: SlidesQueryData
}) => {

  const {
    slides: {
      nodes
    }
  } = data;

  const slides = nodes.map((node) => {
    return {
      slide: node.homeSlides,
      id: node.databaseId
    }
  })

  return slides.reverse();
}

