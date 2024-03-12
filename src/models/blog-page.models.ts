export interface BlogPageData {
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    },
    edges: {
      node: {
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
    }[]
  }
}