import React, { useState } from "react";
import styles from "../styles/Picker.module.css";

export default function Picker() {
  return (
    <div className={styles.overlay}>
      <div className={styles.picker}>
        <header className={styles.head}>
          <button className={styles.cancel}>取消</button>
          <button className={styles.confirm}>确定</button>
        </header>
        <main className={styles.main}>
          <ul className={styles.select}>
            <li className={styles.option}>15%（2万）</li>
            <li className={styles.option}>20%（2万）</li>
            <li className={styles.option}>25%（3万）</li>
            <li className={styles.option}>30%（4万）</li>
            <li className={styles.option}>35%（4万）</li>
            <li className={styles.option}>40%（5万）</li>
            <li className={styles.option}>45%（6万）</li>
          </ul>
          <div className={styles.selectBox}></div>
        </main>
      </div>
    </div>
  );
}
