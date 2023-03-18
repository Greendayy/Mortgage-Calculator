import React, { useState } from "react";
import styles from "../styles/Picker.module.css";

export default function Picker({ onClose, onSelect,options }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (label) => {
    console.log("label", label);
    setSelectedValue(label);
  };
  const calculateValue = (label) => {
    const option = options.find((option) => option.label === label);
    console.log("value", option.value);
    return option ? option.value : 0; //返回选项的值（若为0则选项无效）
  };
  const handleConfirm = () => {
    onSelect({ label: selectedValue, value: calculateValue(selectedValue) });
    onClose();
  };

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
                  key={optionValue.label}
                  className={`${styles.option} ${
                    optionValue.label === selectedValue ? styles.selected : ""
                  }`}
                  onClick={() => handleSelect(optionValue.label)}
                >
                  {optionValue.label}
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
