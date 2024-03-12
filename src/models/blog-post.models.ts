export interface BlogPostPageData {
  post: {
    content: string
    title: string
    featuredImage: {
      node: {
        sourceUrl: string
      }
    }
  }
}