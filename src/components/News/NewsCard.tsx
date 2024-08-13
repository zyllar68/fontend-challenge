import noimage from 'assets/noimage.png';

import { formatDate } from 'lib/formatDate';

type Props = {
  cardImage: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

function NewsCard({ cardImage, title, date, description, link }: Props) {
  return (
    <div className="relative max-h-lvh w-full rounded-lg border-[1px] border-gray-500 p-3 shadow-lg">
      {cardImage ? (
        <img
          className="mb-4 h-60 w-full rounded-md"
          src={cardImage}
          alt="news"
        />
      ) : (
        <img className="mb-4 h-60 w-full rounded-md" src={noimage} alt="news" />
      )}
      <h5 className="mb-1">{title}</h5>
      <div className="mb-4 flex justify-between">
        <p className="font-medium">Published Date:</p>
        <p>{formatDate(date)}</p>
      </div>
      <p className="mb-7">{description}</p>
      <div className="absolute bottom-3 right-3 text-right">
        <a
          className="font-bold hover:text-gray-400"
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
