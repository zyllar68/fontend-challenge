import { useState } from 'react';

import SettingsIcon from 'assets/SettingsIcon';
import PersonalizeFormCard from './PersonalizeFormCard';

function PersonalizeSettings() {
  const [showToast, setShowToast] = useState(false);

  const handleToggleToast = () => {
    setShowToast(!showToast);
  };

  const handleSubmit = () => {
    setShowToast(false);
  };

  return (
    <div className="relative">
      <SettingsIcon
        className="z-1 mr-3 cursor-pointer"
        onClick={handleToggleToast}
      />
      <PersonalizeFormCard
        show={showToast}
        toggleShow={handleToggleToast}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default PersonalizeSettings;
