import { Tab } from "antd-mobile/es/components/tabs/tabs";
import Link from "next/link";
import styles from "../styles/Tabel.module.css";

export default function Detail() {
  return (
    <>
      <nav className={styles.nav}>
        <p>
          <Link href="/">返回</Link>
        </p>
        <h1>还款详情</h1>
      </nav>
    </>
  );
}
