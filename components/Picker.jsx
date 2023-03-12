import React, { useState } from "react";
import styles from "../styles/Picker.module.css";

export default function Picker({ onClose, onSelect }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    console.log('value',value)
    setSelectedValue(value);
  };

  const handleConfirm = () => {
    onSelect(selectedValue);
    onClose();
  };

  const options = [
    "15%（2万）",
    "20%（2万）",
    "25%（3万）",
    "30%（4万）",
    "35%（4万）",
    "40%（5万）",
    "45%（6万）",
  ];
  return (
    <div className={styles.overlay}>
      <div className={styles.picker}>
        <header className={styles.head}>
          <button className={styles.cancel} onClick={onClose}>
            取消
          </button>
          <button className={styles.confirm} onClick={handleConfirm}>
            确定
          </button>
        </header>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <ul className={styles.select}>
              {options.map((optionValue) => (
                <li
                  key={optionValue}
                  className={`${styles.option} ${
                    optionValue === selectedValue ? styles.selected : ""
                  }`}
                  onClick={() => handleSelect(optionValue)}
                >
                  {optionValue}
                </li>
              ))}
            </ul>
          </main>
          <div
            className={`${styles.selectBox} ${
              selectedValue ? styles.selected : ""
            }`}
          >
            {" "}
            {selectedValue && (
              <span className={styles.selectedValue}>{selectedValue}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
