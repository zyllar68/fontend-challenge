import { getNewsApi, getGuardianApi, getNytApi } from '_api/api';

type Props = {
  query: string;
  pageParam?: number;
};

const fetchNewsData = async ({ pageParam = 1, query }: Props) => {
  const [dataNewsApi, dataGuardianApi, dataNytApi] = await Promise.all([
    getNewsApi({ query, page: pageParam }).catch((error) => {
      if (error.response.status === 429 || error.response.status === 426) {
        return [];
      }
      alert('There was an error while communicating News API!');
    }),
    getGuardianApi({
      query,
      page: pageParam,
    }).catch((error) => {
      if (error.response.status === 429 || error.response.status === 400) {
        return [];
      }
      alert('There was an error while communicating Guardian API!');
    }),
    getNytApi({ query, page: pageParam }).catch((error) => {
      if (error.response.status === 429 || error.response.status === 400) {
        return [];
      }
      alert('There was an error while communicating NYT API!');
    }),
  ]);

  const combinedResults = [...dataNewsApi, ...dataGuardianApi, ...dataNytApi];

  combinedResults.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return combinedResults;
};

export default fetchNewsData;
