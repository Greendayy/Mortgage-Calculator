import { Tab } from "antd-mobile/es/components/tabs/tabs";
import Link from "next/link";
import styles from "../styles/Table.module.css";

export default function Detail() {
  return (
    <>
      <head>
        <title>房贷计算器-还款详情</title>
      </head>
      <nav className={styles.nav}>
        <p>
          <Link href="/">返回</Link>
        </p>
        <h1>还款详情</h1>
      </nav>
      <main className={styles.table}>
        <section className={styles.section}>
          <div className={styles.cell}>
            <h2 className={styles.th}>公积金贷30年</h2>
            <text className={styles.td}>10万</text>
          </div>
          <div className={styles.cell}>
            <h2 className={styles.th}>商业贷30年</h2>
            <text className={styles.td}>0万</text>
          </div>
          <div className={styles.cell}>
            <h2 className={styles.th}>每月应还(等额本息)</h2>
            <text className={styles.td}>435元</text>
          </div>
        </section>
      </main>
    </>
  );
}
