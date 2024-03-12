export interface PropertyData {
  card: {
    homeCards: {
      address: string
      infoTable: InfoTable
      description: string
      type: string
      image: {
        sourceUrl: string
      }
    }
  }
}

export interface InfoTable {
  contractReady: string
  paymentProcess: string
  totalSpace: string
  underControl: string
}