import { useState } from "react";
import cx from "classnames";

import Input from "components/Inputs";
import CheckBox from "components/Inputs/CheckBox";

// context
import { usePersonalization } from "context/PersonalizeContext";
import { usePersonalizationCheckbox } from "context/PersonalizeCheckbox";

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
    <div className='absolute top-8 z-10 md:left-[-200px]'>
      <div
        className={cx("rounded-lg border-2 bg-white p-4 text-gray-500 shadow", {
          hidden: !show,
        })}
      >
        <div className='flex justify-between'>
          <p className='text-md font-semibold'>Personalize Filter</p>
          <p className='cursor-pointer' onClick={handleToggle}>
            X
          </p>
        </div>
        <form>
          <Input
            className='mb-2'
            label='Sources'
            name='source'
            value={formState.source}
            onChange={handleInputChange}
          />
          <div className='mb-2 grid grid-cols-2'>
            <p className='col-span-2 mb-1'>Categories</p>
            <CheckBox
              label='News'
              name='News'
              type='checkbox'
              onChange={handleCheckboxChange}
              checked={formState.categories.includes("News")}
            />
            <CheckBox
              label='Opinion'
              name='opinion'
              type='checkbox'
              value='opinion'
              onChange={handleCheckboxChange}
              checked={formState.categories.includes("opinion")}
            />
            <CheckBox
              label='Sport'
              name='Sport'
              type='checkbox'
              value='Sport'
              onChange={handleCheckboxChange}
              checked={formState.categories.includes("Sport")}
            />
            <CheckBox
              label='Arts'
              name='Arts'
              type='checkbox'
              value='Arts'
              onChange={handleCheckboxChange}
              checked={formState.categories.includes("Arts")}
            />
            <CheckBox
              label='Lifestyle'
              name='Lifestyle'
              type='checkbox'
              value='Lifestyle'
              onChange={handleCheckboxChange}
              checked={formState.categories.includes("Lifestyle")}
            />
          </div>
          <Input
            label='Author'
            name='author'
            value={formState.author}
            onChange={handleInputChange}
          />
          <button
            className='mt-4 w-full rounded-md bg-gray-500 py-3 text-white'
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalizeFormCard;
