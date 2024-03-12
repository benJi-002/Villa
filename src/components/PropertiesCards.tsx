'use client';

import styles from '@/components/styles/PropertiesCards.module.scss';
import { GET_PROPERTIES_CARDS } from '@/db/queries/properties';
import { PropertiesCardsList } from '@/models/properties.model';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Card from './Card';

const {
  PaginationWrapper,
  PaginationButton,
  Back,
  Next,
  FilterWrapper,
  FilterButton,
  PropertiesGrid,
  Active,
} = styles;

const PAGE_SIZE = 3;

const PropertiesCards = () => {
  const [filter, setFilter] = useState(['apartment', 'villa', 'penthouse']);

  const { data, fetchMore } = useSuspenseQuery<PropertiesCardsList>(
    GET_PROPERTIES_CARDS,
    {
      variables: {
        first: null,
        last: PAGE_SIZE,
        after: null,
        before: null,
        categories: filter,
      },
    }
  );

  useEffect(() => {
    fetchMore({
      variables: {
        first: null,
        last: PAGE_SIZE,
        after: null,
        before: null,
        categories: filter,
      },
      updateQuery,
    });
  }, [fetchMore, filter]);

  const {
    cards: { pageInfo, edges },
  } = data!;

  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  // @ts-ignore
  function updateQuery(previousResult, { fetchMoreResult }) {
    return fetchMoreResult.posts.edges.length
      ? fetchMoreResult
      : previousResult;
  }

  return (
    <>
      <div className={FilterWrapper}>
        <button
          className={clsx(FilterButton, filter.length > 1 ? Active : null)}
          onClick={() => setFilter(['apartment', 'villa', 'penthouse'])}>
          Show All
        </button>
        <button
          className={clsx(
            FilterButton,
            filter.includes('apartment') && filter.length == 1 ? Active : null
          )}
          onClick={() => setFilter(['apartment'])}>
          Apartment
        </button>
        <button
          className={clsx(
            FilterButton,
            filter.includes('villa') && filter.length == 1 ? Active : null
          )}
          onClick={() => setFilter(['villa'])}>
          Villa House
        </button>
        <button
          className={clsx(
            FilterButton,
            filter.includes('penthouse') && filter.length == 1 ? Active : null
          )}
          onClick={() => setFilter(['penthouse'])}>
          Penthouse
        </button>
      </div>

      <div className={PropertiesGrid}>
        {edges && edges.length > 0 ? (
          edges
            .slice()
            .reverse()
            .map((edge) => {
              const { node } = edge;
              const { databaseId, slug, homeCards } = node;

              return <Card data={homeCards} slug={slug} key={databaseId} />;
            })
        ) : (
          <div>No results found...</div>
        )}

        <div className={PaginationWrapper}>
          {hasNextPage && (
            <button
              className={clsx(PaginationButton, Back)}
              onClick={() => {
                fetchMore({
                  variables: {
                    first: PAGE_SIZE,
                    last: null,
                    after: endCursor ?? null,
                    before: null,
                    categories: filter,
                  },
                  updateQuery,
                });
              }}>
              Back
            </button>
          )}

          {hasPreviousPage && (
            <button
              className={clsx(PaginationButton, Next)}
              onClick={() => {
                fetchMore({
                  variables: {
                    first: null,
                    last: PAGE_SIZE,
                    after: null,
                    before: startCursor ?? null,
                    categories: filter,
                  },
                  updateQuery,
                });
              }}>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default PropertiesCards;
