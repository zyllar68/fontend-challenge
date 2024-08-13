import { usePersonalization } from 'context/PersonalizeContext';
import { usePersonalizationCheckbox } from 'context/PersonalizeCheckbox';

function PersonalizeCheckbox() {
  const { personalizationSettings } = usePersonalization();
  const { checkBoxStatus, setCheckBoxStatus } = usePersonalizationCheckbox();

  const handleChangePersonalInput = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckBoxStatus(!checkBoxStatus);
  };

  return (
    <label className="inline-flex cursor-pointer items-center">
      <span className="mr-3 text-sm font-medium text-black">
        Personal News Feed
      </span>
      <input
        onChange={handleChangePersonalInput}
        type="checkbox"
        checked={checkBoxStatus}
        className="peer sr-only outline-none"
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700"></div>
    </label>
  );
}

export default PersonalizeCheckbox;
