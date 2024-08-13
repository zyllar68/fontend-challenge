import cx from 'classnames';

type Props = {
  title: string;
  active: boolean;
  onClick: () => void;
};

function CategoryItem({ title, active, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={cx(
        'w-full cursor-pointer rounded-full border-2 border-gray-400 px-2 py-2 text-center text-[3vw] hover:bg-gray-400 hover:text-white sm:text-sm',
        {
          'bg-gray-400 text-white': active,
        },
      )}
    >
      {title}
    </div>
  );
}

export default CategoryItem;
