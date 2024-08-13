import { useSearchParams } from 'react-router-dom';

// context
import { usePersonalizationCheckbox } from 'context/PersonalizeCheckbox';

import CategoryFilter from './CategoryFilter';
import Input from 'components/Inputs';

function SearchAndFilters() {
  const { checkBoxStatus, setCheckBoxStatus } = usePersonalizationCheckbox();

  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    category: '',
    source: '',
    date: '',
  });

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const source = searchParams.get('source') || '';
  const dateFrom = searchParams.get('dateFrom') || '';
  const dateTo = searchParams.get('dateTo') || '';

  const updateFilterParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (
      (key === 'category' && newParams.get(key) === value) ||
      (key === 'search' && value === '')
    ) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams, { replace: true });
  };

  return (
    <>
      <p className="text-xl font-medium">Filters</p>
      <Input
        placeholder="Search"
        className="mb-5 sm:flex-auto"
        value={search}
        onChange={(e) => updateFilterParams('search', e.target.value)}
      />
      <div className="mb-5 flex gap-5">
        {!checkBoxStatus && (
          <Input
            label="Source"
            className="w-full sm:flex-auto md:w-20 md:min-w-[300px]"
            type="text"
            value={source}
            onChange={(e) => updateFilterParams('source', e.target.value)}
          />
        )}

        <Input
          className="w-full sm:flex-auto md:w-20 md:min-w-[300px]"
          label="From"
          type="date"
          value={dateFrom}
          onChange={(e) => updateFilterParams('dateFrom', e.target.value)}
        />
        <Input
          className="w-full sm:flex-auto md:w-20 md:min-w-[300px]"
          label="To"
          type="date"
          value={dateTo}
          onChange={(e) => updateFilterParams('dateTo', e.target.value)}
        />
      </div>
      {!checkBoxStatus && (
        <>
          <p className="text-xl font-medium">Categories</p>
          <CategoryFilter
            className="mb-10"
            categoryValue={category}
            onCategoryChange={(category) =>
              updateFilterParams('category', category)
            }
          />
        </>
      )}
    </>
  );
}

export default SearchAndFilters;
