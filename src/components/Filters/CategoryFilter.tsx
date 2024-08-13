//package
import { twMerge } from 'tailwind-merge';
// components
import CategoryItem from './CategoryItem';
// constant
import { NewsApiCategoryList } from 'lib/constants/Categories';

type Props = {
  className?: string;
  categoryValue: string | '';
  onCategoryChange: (category: string) => void;
};

function CategoryFilter({ className, categoryValue, onCategoryChange }: Props) {
  const handleCategoryFilter = (categery: string) => {
    onCategoryChange(categery);
  };

  return (
    <div
      className={twMerge(
        'grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8',
        className,
      )}
    >
      {NewsApiCategoryList.map((title, index) => (
        <CategoryItem
          key={index}
          title={title}
          active={categoryValue === title}
          onClick={() => handleCategoryFilter(title)}
        />
      ))}
    </div>
  );
}

export default CategoryFilter;
