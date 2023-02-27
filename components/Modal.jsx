import styles from "../styles/Modal.module.css";

export default function Modal({ title, content, onClose }) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div>
            <img className={styles.x} src="closure.svg" onClick={onClose} />
          </div>
          <h1 className={styles.header}>{title}</h1>
          <div className={styles.body}>{content}</div>
          <button className={styles.but} onClick={onClose}>
            我知道了
          </button>
        </div>
      </div>
    </>
  );
}
