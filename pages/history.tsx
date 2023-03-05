import Link from "next/link";
import styles from "../styles/Tabel.module.css";

export default function History() {
  return (
    <>
      <nav className={styles.nav}>
        <p>
          <Link href="/">返回</Link>
        </p>
        <h1>历史记录</h1>
      </nav>
    </>
  );
}
