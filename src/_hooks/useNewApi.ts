import { useInfiniteQuery } from '@tanstack/react-query';

import fetchNewsData from '_api/fetchAllApi';

type Props = {
  query: string;
  pageParam?: number;
};

const useNewsApi = ({ query }: Props) => {
  return useInfiniteQuery({
    queryKey: ['news', query],
    queryFn: ({ pageParam }) => fetchNewsData({ query, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length;
    },
  });
};

export default useNewsApi;
