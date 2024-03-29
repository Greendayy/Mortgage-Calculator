import Link from "next/link";
import styles from "../styles/History.module.css";
import Head from "next/head";

export default function History() {
  return (
    <>
      <Head>
        <title>房贷计算器-历史记录</title>
      </Head>
      <nav className={styles.nav}>
        <p>
          <Link href="/">{"ᐸ"}</Link>
        </p>
        <h1>历史记录</h1>
      </nav>
      <main className={styles.table}>
        <section className={styles.row}>
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
        <hr className={styles.hr} />
        <section className={styles.row}>
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
        <hr className={styles.hr} />
      </main>
    </>
  );
}
