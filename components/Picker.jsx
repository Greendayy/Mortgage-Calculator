import React, { useState } from "react";
import styles from "../styles/Picker.module.css";

export default function Picker({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = () => {
    onSelect(selectedOption);
  };

  const handleCancel = () => {
    onSelect(null);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.picker}>
        <select value={selectedOption} onChange={handleChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={styles.buttons}>
          <button onClick={handleCancel}>取消</button>
          <button onClick={handleSelect}>确认</button>
        </div>
      </div>
    </div>
  );
}
