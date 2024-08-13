type NewsApiResponse = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
  category: string | null;
};

export default NewsApiResponse;
