export interface ContactUsPageData {
  page: {
    contactUsContent: {
      text: string
    }
  }
  cardsInfo: {
    nodes: {
      databaseId: number
      contactUsInfoCard: ContactUsInfoCardData
    }[]
  }
}

export interface ContactUsInfoCardData {
  icon: {
    altText: string
    sourceUrl: string
  }
  subtitle: string
  title: string
}