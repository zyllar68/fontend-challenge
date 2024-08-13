import { createContext, useState, useContext } from 'react';

type PersonalizationSettingsType = {
  source: string;
  categories: string[];
  author: string;
};

type PersonalizationContextType = {
  personalizationSettings: PersonalizationSettingsType;
  setPersonalizationSettings: React.Dispatch<
    React.SetStateAction<PersonalizationSettingsType>
  >;
};

type Props = {
  children: React.ReactNode;
};

const PersonalizationContext = createContext<
  PersonalizationContextType | undefined
>(undefined);

export function PersonalizationProvider({ children }: Props) {
  const [personalizationSettings, setPersonalizationSettings] =
    useState<PersonalizationSettingsType>({
      source: '',
      categories: [],
      author: '',
    });
  return (
    <PersonalizationContext.Provider
      value={{ personalizationSettings, setPersonalizationSettings }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  const context = useContext(PersonalizationContext);

  if (!context) {
    throw new Error(
      'usePersonalization must be used within a PersonalizationProvider',
    );
  }
  return context;
}
