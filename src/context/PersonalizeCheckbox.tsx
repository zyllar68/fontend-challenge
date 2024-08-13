import { useState, createContext, useContext } from 'react';

type PersonalCheckboxContextSettingsType = false | true;

type PersonalCheckboxContextType = {
  checkBoxStatus: PersonalCheckboxContextSettingsType;
  setCheckBoxStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

const PersonalCheckboxContext = createContext<
  PersonalCheckboxContextType | false
>(false);

export function PersonalCheckboxContextProvider({ children }: Props) {
  const [checkBoxStatus, setCheckBoxStatus] =
    useState<PersonalCheckboxContextSettingsType>(false);

  return (
    <PersonalCheckboxContext.Provider
      value={{ checkBoxStatus, setCheckBoxStatus }}
    >
      {children}
    </PersonalCheckboxContext.Provider>
  );
}

export function usePersonalizationCheckbox() {
  const context = useContext(PersonalCheckboxContext);

  if (!context) {
    throw new Error(
      'usePersonalization must be used within a PersonalizationProvider',
    );
  }
  return context;
}
