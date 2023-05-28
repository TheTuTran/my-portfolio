import React, { useState, useEffect } from "react";

export default function ToggleButton() {
  const [isLightMode, setisLightMode] = useState(false);

  useEffect(() => {
    // Apply dark mode or light mode styles based on the current mode
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const toggleMode = () => {
    setisLightMode(!isLightMode);
  };

  return (
    <div className="toggle-container">
      <button className="mode-button" onClick={toggleMode}>
        {isLightMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
        <span className="mode-label">{isLightMode ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}
