export interface PropertiesCard {
  slug: string
  databaseId: number
  homeCards: {
    type: string
    price: string
    address: string
    caracteristics: {
      char1: string
      char2: string
      char3: string
      char4: string
      char5: string
      descr1: string
      descr2: string
      descr3: string
      descr4: string
      descr5: string
    }
    image: {
      sourceUrl: string
    }
  }
}

export interface PropertiesCardsList {
  cards: {
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    edges: {
      node: PropertiesCard;
    }[];
  };
}