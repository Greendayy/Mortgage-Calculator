import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Modal from "../components/Modal";
import Link from "next/link";
import Picker from "../components/Picker";

export default function Home() {
  // tab切换标签
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeTab2, setActiveTab2] = useState("tab3");
  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }
  function handleTabClick2(tabName) {
    setActiveTab2(tabName);
  }

  //overlay modal popup
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => setShowModal1(true);
  const closeModal1 = () => setShowModal1(false);

  const openModal2 = () => setShowModal2(true);
  const closeModal2 = () => setShowModal2(false);

  //calc card
  const [showCard, setShowCard] = useState(false);

  const openCard = () => setShowCard(true);

  //picker
  const [showPicker, setShowPicker] = useState(false);

  const openPicker = () => setShowPicker(true);
  const closePicker = () => setShowPicker(false);
  //picker select
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Head>
        <title>房贷计算器</title>
        <meta name="description" content="calc demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 计算结果 */}
      {showCard && (
        <div className={styles.section}>
          <section className={styles.calcResult}>
            <div className={styles.history}>
              <div>
                <h1>房屋总价 -- 万</h1>
                <p>
                  <Link href="/history">{"查看历史 >"}</Link>
                </p>
              </div>
              <p className={styles.p}>
                首付30%、公积金贷0万·30年·利率3.25%、商业贷10万·30年·利率4.65%、等额本息
              </p>
            </div>
            <div className={styles.detail}>
              <div>
                <p>首付款</p>
                <h2>--</h2>
              </div>
              <div className={styles.monthly}>
                <p>每月应还(等额本息)</p>
                <h2>516元</h2>
                <p>
                  <Link href="/detail">{"对比等额本金月供 >"}</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      <main className={styles.main}>
        {/* 计算方式·表头 */}
        <nav className={styles.tab}>
          <h1 className={styles.tabTittle}>计算方式</h1>
          <div className={styles.tabButton}>
            <button
              className={`tablinks ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              按贷款总额
            </button>
            <button
              className={`tablinks ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              按房屋总价
            </button>
          </div>
        </nav>
        {/* 按贷款总额·表单 */}
        <div
          id="tab1"
          className="tabcontent"
          style={{ display: activeTab === "tab1" ? "block" : "none" }}
        >
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
        </div>
        {/* 按房屋总价·表单 */}
        <div
          id="tab2"
          className="tabcontent"
          style={{ display: activeTab === "tab2" ? "block" : "none" }}
        >
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              房屋总价{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="fwzj"
                id="fwzj"
                defaultValue={0}
              />
              <span className={styles.unit}>万</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              首付选择{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="text"
                name="sfxz"
                id="sfxz"
                defaultValue="30%（0万）"
                placeholder="30%（0万）"
                onClick={openPicker}
                value={selectedValue}
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPicker && (
            <Picker
              onClose={closePicker}
              onSelect={(value) => {
                setSelectedValue(value);
                setShowPicker(false);
              }}
            />
          )}
          <hr className={styles.hr} />

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
                placeholder="0"
              />
              <span className={styles.unit}>万</span>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        {/* 贷款方式·表头 */}
        <nav className={styles.tab}>
          <h1 className={styles.tabTittle}>贷款方式</h1>
          <div className={styles.tabButton}>
            <button
              className={`tablinks ${activeTab2 === "tab3" ? "active" : ""}`}
              onClick={() => handleTabClick2("tab3")}
            >
              组合贷
            </button>
            <button
              className={`tablinks ${activeTab2 === "tab4" ? "active" : ""}`}
              onClick={() => handleTabClick2("tab4")}
            >
              商业贷
            </button>
            <button
              className={`tablinks ${activeTab2 === "tab5" ? "active" : ""}`}
              onClick={() => handleTabClick2("tab5")}
            >
              公积金贷
            </button>
          </div>
        </nav>
        {/* 组合贷·表单 */}
        <div
          id="tab3"
          className="tabcontent"
          style={{ display: activeTab2 === "tab3" ? "block" : "none" }}
        >
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              公积金金额{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="gjjje"
                id="gjjje"
                defaultValue={0}
                placeholder="0"
              />
              <span className={styles.unit}>万</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              公积金年限{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="gjjnx"
                id="gjjnx"
                defaultValue="30年"
                placeholder="30年"
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              公积金利率{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="text"
                name="gjjlv"
                id="gjjlv"
                defaultValue="3.25%(最新基准利率1倍)"
                placeholder="3.25%(最新基准利率1倍)"
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              商贷金额{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="sdje"
                id="sdje"
                defaultValue="0"
                placeholder="0"
              />
              <span className={styles.unit}>万</span>
            </div>
          </div>
          <hr className={styles.hr} />
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
              <span className={styles.unit}>{">"}</span>
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
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          <hr className={styles.hr} />

          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              LPR{" "}
              <img
                className={styles.img}
                src="question.svg"
                onClick={openModal1}
              />
              {showModal1 && (
                <Modal
                  title="LPR(贷款市场报价利率)"
                  content="自2019年10月起，商贷利率开始改用LPR(贷款市场报价利率计算。LPR基准利率每月更新一次，实际贷款利率在LPR的基础上进行一定的浮动。"
                  onClose={closeModal1}
                />
              )}
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
              <img
                className={styles.img}
                src="question.svg"
                onClick={openModal2}
              />
              {showModal2 && (
                <Modal
                  title="什么是基点?"
                  content="如果浮动10个1个基点=0.01%，基点，相当于在LPR的基础上增加0.1%为实际贷款利率。"
                  onClose={closeModal2}
                />
              )}
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
        </div>
        {/* 商业贷·表单 */}
        <div
          id="tab4"
          className="tabcontent"
          style={{ display: activeTab2 === "tab4" ? "block" : "none" }}
        >
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

              <span className={styles.unit}>{">"}</span>
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
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              LPR{" "}
              <img
                className={styles.img}
                src="question.svg"
                onClick={openModal1}
              />
              {showModal1 && (
                <Modal
                  title="LPR(贷款市场报价利率)"
                  content="自2019年10月起，商贷利率开始改用LPR(贷款市场报价利率计算。LPR基准利率每月更新一次，实际贷款利率在LPR的基础上进行一定的浮动。"
                  onClose={closeModal1}
                />
              )}
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
              <img
                className={styles.img}
                src="question.svg"
                onClick={openModal2}
              />
              {showModal2 && (
                <Modal
                  title="什么是基点?"
                  content="如果浮动10个1个基点=0.01%，基点，相当于在LPR的基础上增加0.1%为实际贷款利率。"
                  onClose={closeModal2}
                />
              )}
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
        </div>
        {/* 公积金贷 ·表单 */}
        <div
          id="tab5"
          className="tabcontent"
          style={{ display: activeTab2 === "tab5" ? "block" : "none" }}
        >
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              公积金年限{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="gjjnx"
                id="gjjnx"
                defaultValue="30年"
                placeholder="30年"
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              公积金利率{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="text"
                name="gjjlv"
                id="gjjlv"
                defaultValue="3.25%(最新基准利率1倍)"
                placeholder="3.25%(最新基准利率1倍)"
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}></div>
        </div>
      </main>
      <div className={styles.buttonBorder}>
        <button className={styles.calcButton} onClick={openCard}>
          开始计算
        </button>
      </div>
    </div>
  );
}
