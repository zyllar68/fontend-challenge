import { useState } from 'react';
import cx from 'classnames';

import Input from 'components/Inputs';

// context
import { usePersonalization } from 'context/PersonalizeContext';
import { usePersonalizationCheckbox } from 'context/PersonalizeCheckbox';

type FormType = {
  source: string;
  categories: string[];
  author: string;
};

type Props = {
  show: boolean;
  toggleShow: () => void;
  onSubmit: () => void;
};

function PersonalizeFormCard({ show, toggleShow, onSubmit }: Props) {
  const { personalizationSettings, setPersonalizationSettings } =
    usePersonalization();

  const { setCheckBoxStatus } = usePersonalizationCheckbox();

  const [formState, setFormState] = useState<FormType>({
    source: personalizationSettings.source,
    categories: personalizationSettings.categories,
    author: personalizationSettings.author,
  });

  const handleToggle = () => {
    setFormState(personalizationSettings);
    toggleShow();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newData = [...formState.categories];

    if (checked) {
      newData.push(name);
      setFormState((prevState) => ({ ...prevState, categories: newData }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        categories: newData.filter((item) => item !== name),
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setPersonalizationSettings((prevState) => ({
      ...prevState,
      source: formState.source,
      categories: formState.categories,
      author: formState.author,
    }));

    onSubmit();

    setCheckBoxStatus(false);
  };

  return (
    <div
      className={cx(
        'absolute top-8 z-10 w-[500px] rounded-lg border-2 bg-white p-4 text-gray-500 shadow md:left-[-480px]',
        { hidden: !show },
      )}
    >
      <div className="flex justify-between">
        <p className="text-md font-semibold">Personalize Filter</p>
        <p className="cursor-pointer" onClick={handleToggle}>
          X
        </p>
      </div>
      <form>
        <Input
          className="mb-2"
          label="Sources"
          name="source"
          value={formState.source}
          onChange={handleInputChange}
        />
        <div className="mb-2 grid grid-cols-3">
          <p className="col-span-3 mb-1">Categories</p>
          <label>
            <input
              name="News"
              type="checkbox"
              value="News"
              onChange={handleCheckboxChange}
              checked={formState.categories.includes('News')}
            />
            News
          </label>
          <label>
            <input
              name="opinion"
              type="checkbox"
              value="opinion"
              onChange={handleCheckboxChange}
              checked={formState.categories.includes('opinion')}
            />
            Opinion
          </label>
          <label>
            <input
              name="Sport"
              type="checkbox"
              value="Sport"
              onChange={handleCheckboxChange}
              checked={formState.categories.includes('Sport')}
            />
            Sport
          </label>
          <label>
            <input
              name="Arts"
              type="checkbox"
              value="aArtsrts"
              onChange={handleCheckboxChange}
              checked={formState.categories.includes('Arts')}
            />
            Arts
          </label>
          <label>
            <input
              name="lifestyle"
              type="checkbox"
              value="lifestyle"
              onChange={handleCheckboxChange}
              checked={formState.categories.includes('lifestyle')}
            />
            Lifestyle
          </label>
        </div>
        <Input
          label="Author"
          name="author"
          value={formState.author}
          onChange={handleInputChange}
        />
        <button
          className="mt-4 w-full rounded-md bg-gray-500 py-3 text-white"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default PersonalizeFormCard;
