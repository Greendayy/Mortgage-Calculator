import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import  Modal  from "../components/Modal";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeTab2, setActiveTab2] = useState("tab3");

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => setShowModal1(true);
  const closeModal1 = () => setShowModal1(false);

  const openModal2 = () => setShowModal2(true);
  const closeModal2 = () => setShowModal2(false);
  
  function handleTabClick(tabName) {
    setActiveTab(tabName);}
  function handleTabClick2(tabName) {
      setActiveTab2(tabName);}

  
  
      
  // useEffect(() => {
  //   const defaultOpen = document.getElementById("defaultOpen");
  //   if (defaultOpen) {
  //     defaultOpen.click();
  //   }
  // }, [])
  // function openForm(evt, formName) {
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace("active", "");
  //   }
  //   document.getElementById(formName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }
  
  return (
    <div>
      <Head>
        <title>房贷计算器</title>
        <meta name="description" content="calc demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
{/* 计算方式·表头 */}
        <nav className={styles.tab}>
          <h1 className={styles.tabTittle}>计算方式</h1>
          <div className={styles.tabButton}>
            <button className={`tablinks ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}>按贷款总额</button>
            <button className={`tablinks ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}>按房屋总价</button>
          </div>
        </nav>
{/* 按贷款总额·表单 */}
        <form action="" method="get"  id="tab1"
        className="tabcontent"
        style={{ display: activeTab === "tab1" ? "block" : "none" }}>
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
{/* 按房屋总价·表单 */}
        <form action="" method="get"  id="tab2"
        className="tabcontent"
        style={{ display: activeTab === "tab2" ? "block" : "none" }}>
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
                type="num"
                name="sfxz"
                id="sfxz"
                defaultValue="30%（0万）"
                placeholder="30%（0万）"
              />
              <span className={styles.unit}>></span>
              </div>
            </div>
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
        </form>
        <hr className={styles.hr} />
{/* 贷款方式·表头 */}
        <nav className={styles.tab}>
          <h1 className={styles.tabTittle}>贷款方式</h1>
          <div className={styles.tabButton}>
            <button className={`tablinks ${activeTab2 === "tab3" ? "active" : ""}`}
          onClick={() => handleTabClick2("tab3")}>组合贷</button>
            <button className={`tablinks ${activeTab2 === "tab4" ? "active" : ""}`}
          onClick={() => handleTabClick2("tab4")}>商业贷</button>
            <button className={`tablinks ${activeTab2 === "tab5" ? "active" : ""}`}
          onClick={() => handleTabClick2("tab5")}>公积金贷</button>
          </div>
        </nav>
{/* 组合贷·表单 */}
          <form action="" method="get" id="tab1"
        className="tabcontent"
        style={{ display: activeTab2 === "tab3" ? "block" : "none" }}>
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
              <span className={styles.unit}>></span>
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
              <span className={styles.unit}>></span>
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
        

                <img className={styles.img} src="question.svg"  onClick={openModal1}/>
       
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
                <img className={styles.img} src="question.svg" onClick={openModal2}/>
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
          </form>
{/* 商业贷·表单 */}
        <form action="" method="get" id="tab4"
        className="tabcontent"
        style={{ display: activeTab2 === "tab4" ? "block" : "none" }}>
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
                <img className={styles.img} src="question.svg" onClick={openModal1}/>
       
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
                <img className={styles.img} src="question.svg" onClick={openModal2}/>
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
          </form>
{/* 公积金贷 ·表单 */}
          <form action="" method="get"  id="tab5"
        className="tabcontent"
        style={{ display: activeTab2 === "tab5" ? "block" : "none" }}>
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
              <span className={styles.unit}>></span>
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
              <span className={styles.unit}>></span>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.form}></div>
        </form>
      </main>
      <button className={styles.calcButton}>开始计算</button>
    </div>
  );
  }
