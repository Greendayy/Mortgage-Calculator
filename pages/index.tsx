import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>房贷计算器</title>
        <meta name="description" content="calc demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="text-3xl font-bold underline">计算方式</h1>
        </div>

        <div className={styles.description}>
          <h1 className="text-3xl font-bold underline">贷款方式</h1>
        </div>
      </main>
      <button className="bg-blue text-white block ">开始计算</button>
    </>
  );
}
