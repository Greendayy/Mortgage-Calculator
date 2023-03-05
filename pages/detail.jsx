import Link from "next/link";
import styles from "../styles/Detail.module.css";

export default function Detail() {
  return (
    <div className={styles.detail}>
      <header>
        <title>房贷计算器-还款详情</title>
      </header>
      <nav className={styles.nav}>
        <p>
          <Link href="/">返回</Link>
        </p>
        <h1>还款详情</h1>
      </nav>
      <main className={styles.main}>
        <div className={styles.header}>
          <h2 className={styles.res}>
            贷款总额<span className={styles.num}> 10 </span>万
          </h2>
          <p className={styles.text}>
            首付30%、公积金贷0万·30年·利率3.25%、商业贷10万·30年·利率4.65%
          </p>
        </div>
        <section className={styles.card}>
          <p className={styles.title}>等额本息</p>
          <p className={styles.title}>等额本金</p>
          <p className={styles.text}>每月应还（元）</p>
          <p className={styles.text}>首月应还（元）</p>
          <p className={styles.num}>516</p>
          <p className={styles.num}>665</p>
          <p className={styles.text}>利息总额（万元）</p>
          <p className={styles.text}>利息总额（万元）</p>
          <p className={styles.num}>8.6</p>
          <p className={styles.num}>7.0</p>
          <p className={styles.p}>特点</p> <p className={styles.p}>特点</p>
          <p className={styles.features}>每月月供稳定</p>
          <p className={styles.features}>每月递减X元</p>
          <div className={styles.select}>
            <input
              type="radio"
              id="interest"
              name="drone"
              value="interest"
              checked
              className={styles.radio}
            />
            <label for="interest" className={styles.label}>
              优先看等额本息
            </label>
          </div>
          <div className={styles.select}>
            <input
              type="radio"
              id="principal"
              name="drone"
              value="principal"
              className={styles.radio}
            />
            <label for="principal" className={styles.label}>
              优先看等额本金
            </label>
          </div>
        </section>
        <h2 className={styles.res}>还款细则</h2>
        <section className={styles.table}>
          <h2 className={styles.th}>{""}</h2>
          <h2 className={styles.th}>等额本息</h2>
          <h2 className={styles.th}>等额本息</h2>
          <h3 className={styles.th}>第{"1"}个月</h3>
          <p className={styles.td}>¥516</p>
          <p className={styles.td}>¥665</p>
          <h3 className={styles.th}>第{"2"}个月</h3>
          <p className={styles.td}>¥516</p>
          <p className={styles.td}>¥665</p>
        </section>
      </main>
    </div>
  );
}
