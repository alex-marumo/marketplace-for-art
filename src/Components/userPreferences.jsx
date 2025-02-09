import React, { useState } from 'react';

const preferencesList = [
  "Paintings",
  "Sculptures",
  "Photography",
  "Graphic Art",
  "Ceramics",
  "Textile Art",
  "Jewelry Design",
  "Fashion Design",
];

const UserPreferences = ({ savePreferences }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const handleCheckboxChange = (preference) => {
    setSelectedPreferences((prev) => 
      prev.includes(preference) ? prev.filter((item) => item !== preference) : [...prev, preference]
    );
  };

  const handleSubmit = () => {
    savePreferences(selectedPreferences);
  };

  return (
    <div>
      <h2>Select Your Preferences</h2>
      {preferencesList.map((preference) => (
        <div key={preference}>
          <input
            type="checkbox"
            id={preference}
            value={preference}
            onChange={() => handleCheckboxChange(preference)}
          />
          <label htmlFor={preference}>{preference}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Save Preferences</button>
    </div>
  );
};

export default UserPreferences;
