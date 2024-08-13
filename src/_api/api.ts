import axios from 'axios';

type Props = {
  query: string;
  page: number;
};

export const getNewsApi = async ({ query, page }: Props) => {
  const url = `${process.env.REACT_APP_NEWSAPI_URL}/everything`;

  const params = {
    q: query,
    apiKey: process.env.REACT_APP_NEWSAPI_KEY,
    pageSize: 10,
    page: page + 1,
  };

  const { data } = await axios.get(url, { params });

  const restructuredArticles = data.articles.map((article: any) => ({
    category: '',
    ...article,
  }));

  return restructuredArticles;
};

export const getNytApi = async ({ query, page }: Props) => {
  const url = `${process.env.REACT_APP_NYT_URL}`;

  const params = {
    q: query,
    'api-key': process.env.REACT_APP_NYT_API_KEY,
    page,
  };

  const res = await axios.get(url, { params });

  const restructuredArticles = res.data.response.docs.map((article: any) => ({
    source: {
      id: null,
      name: article.source,
    },
    author: article.byline.original,
    url: article.web_url,
    urlToImage:
      `https://static01.nyt.com/${article.multimedia?.[0]?.url}` || null,
    title: article.headline.main,
    publishedAt: article.pub_date,
    description: article.lead_paragraph,
    category: '',
  }));

  return restructuredArticles;
};

export const getGuardianApi = async ({ query, page }: Props) => {
  const url = `${process.env.REACT_APP_GUARDIAN_URL}`;

  const params = {
    q: query,
    'page-size': 10,
    page: page + 1,
    'api-key': process.env.REACT_APP_GUARDIAN_API_KEY,
    'show-fields': 'byline,trailText,thumbnail',
  };

  const res = await axios.get(url, { params });

  const restructuredArticles = res.data.response.results.map(
    (article: any) => ({
      source: {
        id: article.id, // done
        name: article.sectionName, // done
      },
      author: article.fields.byline, //done
      title: article.webTitle, // done
      description: article.fields.trailText, //done
      url: article.webUrl, // done
      urlToImage: article.fields.thumbnail, // done
      publishedAt: article.webPublicationDate, // done
      category: article.pillarName,
    }),
  );

  return restructuredArticles;
};
