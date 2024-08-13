import { useMemo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

// context
import { usePersonalizationCheckbox } from 'context/PersonalizeCheckbox';
import { usePersonalization } from 'context/PersonalizeContext';

// components
import NewsCard from './NewsCard';
// hooks
import useNewsApi from '_hooks/useNewApi';

function NewsList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { checkBoxStatus } = usePersonalizationCheckbox();
  const { personalizationSettings } = usePersonalization();

  const { ref, inView } = useInView();

  const search = queryParams.get('search') || 'random';
  const dateFrom = queryParams.get('dateFrom') || '';
  const dateTo = queryParams.get('dateTo') || '';
  const category = queryParams.get('category') || '';
  const source = queryParams.get('source') || '';

  const { data, status, fetchNextPage, isFetchingNextPage } = useNewsApi({
    query: search,
  });

  const filteredData = useMemo(() => {
    if (data) {
      const allData = data.pages.flat();
      let filtered = allData;

      if (checkBoxStatus) {
        if (personalizationSettings.source) {
          filtered = filtered.filter(
            (item) =>
              item.source &&
              item.source.name &&
              item.source.name
                .toLowerCase()
                .includes(personalizationSettings.source.toLowerCase()),
          );
        }
        if (personalizationSettings.author) {
          filtered = filtered.filter(
            (item) => item.author === personalizationSettings.author,
          );
        }

        if (personalizationSettings.categories.length > 0) {
          filtered = filtered.filter((item) =>
            personalizationSettings.categories.includes(item.category),
          );
        }
      } else {
        if (category) {
          filtered = filtered.filter((item) => item.category === category);
        }
        if (source) {
          filtered = filtered.filter(
            (item) =>
              item.source &&
              item.source.name &&
              item.source.name.toLowerCase().includes(source.toLowerCase()),
          );
        }
      }

      if (dateFrom) {
        filtered = filtered.filter((item) => {
          const publishedDate = new Date(item.publishedAt);
          const fromDate = new Date(dateFrom);
          return publishedDate >= fromDate;
        });
      }
      if (dateTo) {
        filtered = filtered.filter((item) => {
          const publishedDate = new Date(item.publishedAt);
          const toDate = new Date(dateTo);
          return publishedDate <= toDate;
        });
      }

      return filtered;
    }
    return [];
  }, [data, dateFrom, dateTo, category, source, checkBoxStatus]);

  console.log(filteredData);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (filteredData.length < 1) {
    return <p>No Data</p>;
  }

  return (
    <>
      <button onClick={() => fetchNextPage()}>next</button>
      <div className="grid h-[calc(100vh-650px)] grid-cols-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, index) => {
          return (
            <NewsCard
              key={index}
              cardImage={item.urlToImage!}
              title={item.title!}
              date={item.publishedAt}
              description={item.description!}
              link={item.url}
            />
          );
        })}
        {isFetchingNextPage && (
          <div className="col-span-1 w-full text-center md:col-span-2 lg:col-span-3">
            fetching data
          </div>
        )}
        <div
          ref={ref}
          className="col-span-1 w-full text-center md:col-span-2 lg:col-span-3"
        >
          .
        </div>
      </div>
    </>
  );
}

export default NewsList;
