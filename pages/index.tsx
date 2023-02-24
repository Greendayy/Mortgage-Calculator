import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>房贷计算器</title>
        <meta name="description" content="calc demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.tab}>
          <h1 className={styles.tabTittle}>计算方式</h1>
          <div className={styles.tabButton}>
            <button className={styles.tabButton1}>按贷款总额</button>
            <button className={styles.tabButton2}>按房屋总价</button>
          </div>
        </nav>
        <form action="" method="get">
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              贷款金额{" "}
            </label>
              <div className={styles.input}>
            <input
              className={styles.input}
              type="num"
              name="dkje"
              id="dkje"
              defaultValue={0}
              required
            />
            <span className={styles.unit}>万</span>
            </div>
          </div>
        </form>
        <hr className={styles.hr} />
        <nav className={styles.tab}>
          <h1 className={styles.tabTittle}>计算方式</h1>
          <div className={styles.tabButton}>
            <button className={styles.tabButton3}>组合贷</button>
            <button className={styles.tabButton4}>商业贷</button>
            <button className={styles.tabButton5}>公积金贷</button>
          </div>
        </nav>
        <div className={styles.formMain}>
          <form action="" method="get">
            <div className={styles.form}>
              <label className={styles.label} htmlFor="name">
                商贷年限{" "}
              </label>
              <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="sdnx"
                id="sdnx"
                defaultValue="30年"
                placeholder="30年"
              />
              <span className={styles.unit}>></span>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.form}>
              <label className={styles.label} htmlFor="name">
                利率方式{" "}
              </label>
              <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="llfs"
                id="llfs"
                placeholder="使用最新LPR"
                defaultValue="使用最新LPR"
              />
              <span className={styles.unit}>></span>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.form}>
              <label className={styles.label} htmlFor="name">
                LPR{" "}
              </label>
              <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="lpr"
                id="lpr"
                placeholder="4.65"
                defaultValue={4.65}
              />
              <span className={styles.unit}>%</span>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.form}>
              <label className={styles.label} htmlFor="name">
                基点{" "}
              </label>
              <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="jd"
                id="jd"
                placeholder="0"
                defaultValue={0}
              />
              <span className={styles.unit}>BP(‱)</span>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.form}>
              <label className={styles.label} htmlFor="name">
                商贷利率{" "}
              </label>
              <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="sdll"
                id="sdll"
                placeholder="4.65%+0‱="
                defaultValue=""
              />
              <span>4.65%</span>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.form}></div>
          </form>
        </div>
      </main>
      <button className={styles.calcButton}>开始计算</button>
    </>
  );
}
