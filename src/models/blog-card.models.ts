export interface BlogCardData {
  title: string
  excerpt: string
  slug: string
  databaseId: number
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
}