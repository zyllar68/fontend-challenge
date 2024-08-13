import { PersonalizationProvider } from 'context/PersonalizeContext';
import { PersonalCheckboxContextProvider } from 'context/PersonalizeCheckbox';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <PersonalizationProvider>
      <PersonalCheckboxContextProvider>
        {children}
      </PersonalCheckboxContextProvider>
    </PersonalizationProvider>
  );
}

export default ContextProvider;
