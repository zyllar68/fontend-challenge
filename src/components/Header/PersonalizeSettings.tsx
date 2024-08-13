import { useState } from "react";

import SettingsIcon from "assets/SettingsIcon";
import PersonalizeFormCard from "./PersonalizeFormCard";

function PersonalizeSettings() {
  const [showToast, setShowToast] = useState(false);

  const handleToggleToast = (key: string) => {
    if (key === "card") setShowToast(!showToast);
    else setShowToast(true);
  };

  const handleSubmit = () => {
    setShowToast(false);
  };

  return (
    <div className='relative'>
      <SettingsIcon
        className='z-1 mr-3 cursor-pointer'
        onClick={() => handleToggleToast("settings")}
      />
      <PersonalizeFormCard
        show={showToast}
        toggleShow={() => handleToggleToast("card")}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default PersonalizeSettings;
