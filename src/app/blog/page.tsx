'use client'

import BlogCard from '@/components/BlogCard';
import styles from './styles.module.scss';
import PagesHeader from '@/components/PagesHeader';
import { GET_BLOG_PAGE_DATA } from '@/db/queries/blog';
import { BlogPageData } from '@/models/blog-page.models';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useEffect } from 'react';
import clsx from 'clsx';

const {
  BlogSection,
  BlogGrid,
  PaginationWrapper,
  PaginationButton,
  Back,
  Next
} = styles;

const PAGE_SIZE = 3;

const Page = () => {

  const { data, fetchMore } = useSuspenseQuery<BlogPageData>(
    GET_BLOG_PAGE_DATA,
    {
      variables: {
        first: PAGE_SIZE,
        last: null,
        after: null,
        before: null,
      },
    }
  );

  useEffect(() => {
    fetchMore({
      variables: {
        first: PAGE_SIZE,
        last: null,
        after: null,
        before: null,
      },
      updateQuery,
    });
  }, [fetchMore]);

  // @ts-ignore
  function updateQuery(previousResult, { fetchMoreResult }) {
    return fetchMoreResult.posts.edges.length
      ? fetchMoreResult
      : previousResult;
  }

  const {
    posts: { pageInfo, edges },
  } = data!;

  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;
  
  const breadcrumbs = [
    {url: '/', label: 'Home'},
    {url: '', label: 'Blog', disable: true}
  ]

  return (
    <>
      <PagesHeader breadcrumbs={breadcrumbs} title='Blog'/>
    
      <div className={BlogSection}>
        <div className="container">
          <div className={BlogGrid}>
            {edges && edges.length > 0 ? (
              edges.map((edge) => {
                  const { node } = edge;
                  const { databaseId } = node;

                  return <BlogCard data={node} key={databaseId} />;
                })
            ) : (
              <div>No results found...</div>
            )}

            <div className={PaginationWrapper}>
              {hasPreviousPage && (
                <button
                  className={clsx(PaginationButton, Back)}
                  onClick={() => {
                    fetchMore({
                      variables: {
                        first: null,
                        last: PAGE_SIZE,
                        after: null,
                        before: startCursor ?? null,
                      },
                      updateQuery,
                    });
                  }}>
                  Back
                </button>
              )}

              {hasNextPage && (
                <button
                  className={clsx(PaginationButton, Next)}
                  onClick={() => {
                    fetchMore({
                      variables: {
                        first: PAGE_SIZE,
                        last: null,
                        after: endCursor ?? null,
                        before: null,
                      },
                      updateQuery,
                    });
                  }}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;