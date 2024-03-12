export interface SlidesQueryData {
  slides: {
    nodes: {
      databaseId: number;
      homeSlides: {
        subtitle: string;
        title: string;
        photo: {
          sourceUrl: string;
        };
      };
    }[];
  };
}

export interface FeaturedBlockData {
  featuredBlocks: {
    nodes: {
      homeFeatured: {
        title: string;
        photo: {
          sourceUrl: string;
        };
      };
    }[];
  };
}

export interface FaqBlockData {
  fAQs: {
    nodes: {
      databaseId: number;
      homeFAQ: {
        answer: string;
        question: string;
      };
    }[];
  };
}

export interface VideoViewBlockData {
  page: {
    homeVideo: {
      title: string;
      videoUrl: string;
      preview: {
        sourceUrl: string;
      };
    };
  };
}

export interface FunFactsBlockData {
  achievements: {
    nodes: {
      databaseId: number;
      homeAchievements: {
        description: string;
        icon: string;
        numeric: number;
      };
    }[];
  };
}

export interface BestDealBlockData {
  tabs: {
    nodes: {
      databaseId: number;
      homeTabs: {
        charTable: {
          [key: string]: {
            label: string;
            value: string;
          };
        };
        mainImage: {
          sourceUrl: string;
        };
        tabName: string;
        textDescription: string;
        textTitle: string;
        value: string;
      };
    }[];
  };
}

export interface PropertiesBlockData {
  propertiesBlock: {
    homeProperties: {
      title: string;
    };
  };
  cards: {
    nodes: {
      slug: string;
      databaseId: number;
      homeCards: CardsData;
    }[];
  };
}

export interface CardsData {
  address: string;
  caracteristics: {
    char1: string;
    char2: string;
    char3: string;
    char4: string;
    char5: string;
    descr1: string;
    descr2: string;
    descr3: string;
    descr4: string;
    descr5: string;
  };
  image: {
    sourceUrl: string;
  };
  price: string;
  type: string;
}

export interface ContactUsData {
  contactUsBlock: {
    homeContactUs: {
      background: {
        sourceUrl: string;
        altText: string;
      };
      title: string;
    };
  };
  cardsInfo: {
    nodes: {
      databaseId: number;
      contactUsInfoCard: CardInfoData;
    }[];
  };
}

export interface CardInfoData {
  icon: {
    altText: string;
    sourceUrl: string;
  };
  subtitle: string;
  title: string;
}
