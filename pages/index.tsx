import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Link from "next/link";
import Picker from "../components/Picker";
import {
  prepaymentOptions,
  providentFundPeriodOptions,
  providentFundInterestRateOptions,
  businessLoanTermOptions,
  interestRateMethodOpttions,
} from "../db/pickerData";
import Image from "next/image";

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
  const [showPickerPrepayment, setShowPickerPrepayment] = useState(false);
  const [showPickerProvidentFundPeriod, setShowPickerProvidentFundPeriod] =
    useState(false);
  const [
    showPickerProvidentFundInterestRate,
    setShowPickerProvidentFundInterestRate,
  ] = useState(false);

  const [showPickerBusinessLoanTerm, setShowPickerBusinessLoanTerm] =
    useState(false);
  const [showPickerInterestRateMethod, setShowPickerInterestRateMethod] =
    useState(false);

  const openPickerPrepayment = () => setShowPickerPrepayment(true);
  const closePickerPrepayment = () => setShowPickerPrepayment(false);
  const openPickerProvidentFundPeriod = () =>
    setShowPickerProvidentFundPeriod(true);
  const closePickerProvidentFundPeriod = () =>
    setShowPickerProvidentFundPeriod(false);
  const openPickerProvidentFundInterestRate = () =>
    setShowPickerProvidentFundInterestRate(true);
  const closePickerProvidentFundInterestRate = () =>
    setShowPickerProvidentFundInterestRate(false);
  const openPickerBusinessLoanTerm = () => setShowPickerBusinessLoanTerm(true);
  const closePickerBusinessLoanTerm = () =>
    setShowPickerBusinessLoanTerm(false);
  const openPickerInterestRateMethod = () =>
    setShowPickerInterestRateMethod(true);
  const closePickerInterestRateMethod = () =>
    setShowPickerInterestRateMethod(false);
  //picker select
  const [selectedLabelPrepayment, setSelectedLabelPrepayment] = useState("");
  const [calculationValuePrepayment, setCalculationValuePrepayment] =
    useState(0.3);
  const [
    selectedLabelProvidentFundPeriod,
    setSelectedLabelProvidentFundPeriod,
  ] = useState("");
  const [
    calculationValueProvidentFundPeriod,
    setCalculationValueProvidentFundPeriod,
  ] = useState(30);
  const [
    selectedLabelProvidentFundInterestRate,
    setSelectedLabelProvidentFundInterestRate,
  ] = useState("");
  const [
    calculationValueProvidentFundInterestRate,
    setCalculationValueProvidentFundInterestRate,
  ] = useState(0.0325);
  const [selectedLabelBusinessLoanTerm, setSelectedLabelBusinessLoanTerm] =
    useState("");
  const [
    calculationValueBusinessLoanTerm,
    setCalculationValueBusinessLoanTerm,
  ] = useState(30);
  const [selectedLabelInterestRateMethod, setSelectedLabelInterestRateMethod] =
    useState("");
  const [
    calculationValueInterestRateMethod,
    setCalculationValueInterestRateMethod,
  ] = useState(0.034);

  const handleSelectPrepayment = (selectedOption) => {
    setSelectedLabelPrepayment(selectedOption.label);
    setCalculationValuePrepayment(selectedOption.value);
  };
  //计算房屋总价
  const handlePickerSelectPrepayment = (selectedOption) => {
    handleSelectPrepayment(selectedOption);
    setSelectedLabelPrepayment(selectedOption.label);
    setCalculationValuePrepayment(selectedOption.value);
    setTotalPrice(loanAmount + loanAmount * selectedOption.value);
  };
  console.log("calculationValuePrepayment ", calculationValuePrepayment);

  const handleSelectProvidentFundPeriod = (selectedOption) => {
    setSelectedLabelProvidentFundPeriod(selectedOption.label);
    setCalculationValueProvidentFundPeriod(selectedOption.value);
  };

  const handlePickerSelectProvidentFundPeriod = (selectedOption) => {
    handleSelectProvidentFundPeriod(selectedOption);
    setSelectedLabelProvidentFundPeriod(selectedOption.label);
  };
  const handleSelectProvidentFundInterestRate = (selectedOption) => {
    setSelectedLabelProvidentFundInterestRate(selectedOption.label);
    setCalculationValueProvidentFundInterestRate(selectedOption.value);
  };

  const handlePickerSelectProvidentFundInterestRate = (selectedOption) => {
    handleSelectProvidentFundInterestRate(selectedOption);
    setSelectedLabelProvidentFundInterestRate(selectedOption.label);
  };

  const handleSelectBusinessLoanTerm = (selectedOption) => {
    setSelectedLabelBusinessLoanTerm(selectedOption.label);
    setCalculationValueBusinessLoanTerm(selectedOption.value);
  };

  const handlePickerSelectBusinessLoanTerm = (selectedOption) => {
    handleSelectBusinessLoanTerm(selectedOption);
    setSelectedLabelBusinessLoanTerm(selectedOption.label);
  };
  const handleSelectInterestRateMethod = (selectedOption) => {
    setSelectedLabelInterestRateMethod(selectedOption.label);
    setCalculationValueInterestRateMethod(selectedOption.value);
  };

  const handlePickerSelectInterestRateMethod = (selectedOption) => {
    handleSelectInterestRateMethod(selectedOption);
    setSelectedLabelInterestRateMethod(selectedOption.label);
  };
  //input
  const [loanAmount, setLoanAmount] = useState(0);
  const [providentFundLoanAmount, setProvidentFundLoanAmount] = useState(0);
  const [businessLoanAmount, setBusinessLoanAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function calculateBusinessLoanAmount() {
    let businessLoanAmount = loanAmount;
    if (providentFundLoanAmount) {
      businessLoanAmount = loanAmount - providentFundLoanAmount;
    }
    setBusinessLoanAmount(businessLoanAmount);
  }

  //calc需现实项目：
  //房屋总价 totalPrice
  //贷款金额 loanAmount
  //首付选项 prepayment
  //公积金年限 providentFundPeriod
  //公积金利率 providentFundInterestRate
  //公积金金额 providentFundLoanAmount
  //商贷金额 businessLoanAmount
  //商贷年限 businessLoanTerm
  //利率方式 interestRateMethod
  //商贷利率 businessLoanInterestRate
  //基点 basePoint

  //公积金贷年限 providentFundLoanPeriod//
  //公积金贷利率 providentFundLoanInterestRate//
  //首付款 = 房屋售价 × 首付比例 payInAdvance = totalPrice * downPaymentRatio
  //等额本息：月还本息 = 贷款本金 x 月利率 x (1 + 月利率) ^ 还款月数 / ((1 + 月利率) ^ 还款月数 - 1)
  const payInAdvance = totalPrice - loanAmount;
  const providentFundMonthly =
    (providentFundLoanAmount *
      10000 *
      calculationValueProvidentFundInterestRate *
      (1 + calculationValueProvidentFundInterestRate)) ^
    ((calculationValueProvidentFundPeriod * 12) /
      ((1 + calculationValueProvidentFundInterestRate) ^
        (calculationValueProvidentFundPeriod * 12 - 1)));
  console.log("providentFundMonthly", providentFundMonthly);
  const businessLoanMonthly =
    (businessLoanAmount *
      10000 *
      calculationValueInterestRateMethod *
      (1 + calculationValueInterestRateMethod)) ^
    ((calculationValueBusinessLoanTerm * 12) /
      ((1 + calculationValueInterestRateMethod) ^
        (calculationValueBusinessLoanTerm * 12 - 1)));
  console.log("businessLoanMonthly", businessLoanMonthly);
  const [result, setResult] = useState("");

  const calculatePayment = () => {
    if (!providentFundLoanAmount) {
      setResult(businessLoanMonthly);
    } else {
      setResult(providentFundMonthly + businessLoanMonthly);
    }
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
                <h1>房屋总价 {totalPrice ? `${totalPrice} 万` : "-- 万"} </h1>
                <p>
                  <Link href="/history">{"查看历史 >"}</Link>
                </p>
              </div>
              <p className={styles.p}>
                首付{selectedLabelPrepayment}
                、公积金贷{providentFundLoanAmount}万·
                {selectedLabelProvidentFundPeriod}·利率
                {calculationValueProvidentFundInterestRate * 100}%、商业贷
                {businessLoanAmount}万·{calculationValueBusinessLoanTerm}
                年·利率4.65%、等额本息
              </p>
            </div>
            <div className={styles.detail}>
              <div>
                <p>首付款</p>
                <h2>
                  {payInAdvance}
                  <span>万</span>
                </h2>
              </div>
              <div className={styles.monthly}>
                <p>每月应还(等额本息)</p>
                {result && (
                  <h2>
                    {result}
                    <span>元</span>
                  </h2>
                )}
                {/* <h2>516元</h2> */}
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
            <label className={styles.label} htmlFor="loanAmount">
              贷款金额{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="loanAmount"
                id="loanAmount"
                placeholder="0"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                onBlur={() =>
                  setTotalPrice(
                    loanAmount + loanAmount * calculationValuePrepayment
                  )
                }
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
            <label className={styles.label} htmlFor="totalPrice">
              房屋总价{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="totalPrice"
                id="totalPrice"
                placeholder="0"
                value={totalPrice}
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
                type="mun"
                name="prepayment"
                id="prepayment"
                // defaultValue={3}
                placeholder={
                  selectedLabelPrepayment ? selectedLabelPrepayment : "30%"
                }
                onClick={openPickerPrepayment}
                calcValue={
                  calculationValuePrepayment ? calculationValuePrepayment : 0.03
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerPrepayment && (
            <Picker
              onClose={closePickerPrepayment}
              onSelect={handlePickerSelectPrepayment}
              options={prepaymentOptions}
            />
          )}
          <hr className={styles.hr} />

          <div className={styles.form}>
            <label className={styles.label} htmlFor="loanAmount">
              贷款金额{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="loanAmount"
                id="loanAmount"
                placeholder="0"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                onBlur={calculateBusinessLoanAmount}
              />
              <span className={styles.unit}>万</span>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        {/* 贷款方式·表头 */}
        <nav className={styles.tab} style={{ marginTop: "1rem" }}>
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
            <label className={styles.label} htmlFor="providentFundLoanAmount">
              公积金金额{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="providentFundLoanAmount"
                id="providentFundLoanAmount"
                value={providentFundLoanAmount}
                onChange={(e) =>
                  setProvidentFundLoanAmount(Number(e.target.value))
                }
                onBlur={calculateBusinessLoanAmount}
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
                id="providentFundPeriod"
                placeholder={
                  selectedLabelProvidentFundPeriod
                    ? selectedLabelProvidentFundPeriod
                    : "30年"
                }
                onClick={openPickerProvidentFundPeriod}
                calcValue={
                  calculationValueProvidentFundPeriod
                    ? calculationValueProvidentFundPeriod
                    : 30
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerProvidentFundPeriod && (
            <Picker
              onClose={closePickerProvidentFundPeriod}
              onSelect={handlePickerSelectProvidentFundPeriod}
              options={providentFundPeriodOptions}
            />
          )}
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
                id="providentFundInterestRate"
                placeholder={
                  selectedLabelProvidentFundInterestRate
                    ? selectedLabelProvidentFundInterestRate
                    : "3.25%(最新基准利率1倍)"
                }
                onClick={openPickerProvidentFundInterestRate}
                calcValue={
                  calculationValueProvidentFundInterestRate
                    ? calculationValueProvidentFundInterestRate
                    : 0.0325
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerProvidentFundInterestRate && (
            <Picker
              onClose={closePickerProvidentFundInterestRate}
              onSelect={handlePickerSelectProvidentFundInterestRate}
              options={providentFundInterestRateOptions}
            />
          )}
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="businessLoanAmount">
              商贷金额{" "}
            </label>
            <div className={styles.input}>
              <input
                className={styles.input}
                type="num"
                name="businessLoanAmount"
                id="businessLoanAmount"
                value={businessLoanAmount}
                disabled
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
                id="businessLoanTerm"
                placeholder={
                  selectedLabelBusinessLoanTerm
                    ? selectedLabelBusinessLoanTerm
                    : "30年"
                }
                onClick={openPickerBusinessLoanTerm}
                calcValue={
                  calculationValueBusinessLoanTerm
                    ? calculationValueBusinessLoanTerm
                    : 30
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerBusinessLoanTerm && (
            <Picker
              onClose={closePickerBusinessLoanTerm}
              onSelect={handlePickerSelectBusinessLoanTerm}
              options={businessLoanTermOptions}
            />
          )}
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
                id="interestRateMethod"
                placeholder={
                  selectedLabelInterestRateMethod
                    ? selectedLabelInterestRateMethod
                    : "使用最新LPR"
                }
                onClick={openPickerInterestRateMethod}
                calcValue={
                  calculationValueInterestRateMethod
                    ? calculationValueInterestRateMethod
                    : 0.034
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerInterestRateMethod && (
            <Picker
              onClose={closePickerInterestRateMethod}
              onSelect={handlePickerSelectInterestRateMethod}
              options={interestRateMethodOpttions}
            />
          )}
          <hr className={styles.hr} />

          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              LPR{" "}
              <img
                className={styles.img}
                src="question.svg"
                onClick={openModal1}
                alt={""}
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
                alt={""}
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
                id="basePoint"
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
                id="businessLoanInterestRate"
                placeholder="4.65%+0‱="
                defaultValue=""
              />
              <span>4.65%</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.form}></div>
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
                id="businessLoanTerm"
                placeholder={
                  selectedLabelBusinessLoanTerm
                    ? selectedLabelBusinessLoanTerm
                    : "30年"
                }
                onClick={openPickerBusinessLoanTerm}
                calcValue={
                  calculationValueBusinessLoanTerm
                    ? calculationValueBusinessLoanTerm
                    : 30
                }
              />

              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerBusinessLoanTerm && (
            <Picker
              onClose={closePickerBusinessLoanTerm}
              onSelect={handlePickerSelectBusinessLoanTerm}
              options={businessLoanTermOptions}
            />
          )}
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
                id="interestRateMethod"
                placeholder={
                  selectedLabelInterestRateMethod
                    ? selectedLabelInterestRateMethod
                    : "使用最新LPR"
                }
                onClick={openPickerInterestRateMethod}
                calcValue={
                  calculationValueInterestRateMethod
                    ? calculationValueInterestRateMethod
                    : 0.034
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerInterestRateMethod && (
            <Picker
              onClose={closePickerInterestRateMethod}
              onSelect={handlePickerSelectInterestRateMethod}
              options={interestRateMethodOpttions}
            />
          )}
          <hr className={styles.hr} />
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              LPR{" "}
              <img
                className={styles.img}
                src="question.svg"
                onClick={openModal1}
                alt={""}
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
                alt={""}
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
                id="basePoint"
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
                id="providentFundPeriod"
                placeholder={
                  selectedLabelProvidentFundPeriod
                    ? selectedLabelProvidentFundPeriod
                    : "30年"
                }
                onClick={openPickerProvidentFundPeriod}
                calcValue={
                  calculationValueProvidentFundPeriod
                    ? calculationValueProvidentFundPeriod
                    : 30
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerProvidentFundPeriod && (
            <Picker
              onClose={closePickerProvidentFundPeriod}
              onSelect={handlePickerSelectProvidentFundPeriod}
              options={providentFundPeriodOptions}
            />
          )}
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
                id="providentFundInterestRate"
                placeholder={
                  selectedLabelProvidentFundInterestRate
                    ? selectedLabelProvidentFundInterestRate
                    : "3.25%(最新基准利率1倍)"
                }
                onClick={openPickerProvidentFundInterestRate}
                calcValue={
                  calculationValueProvidentFundInterestRate
                    ? calculationValueProvidentFundInterestRate
                    : 0.0325
                }
              />
              <span className={styles.unit}>{">"}</span>
            </div>
          </div>
          {showPickerProvidentFundInterestRate && (
            <Picker
              onClose={closePickerProvidentFundInterestRate}
              onSelect={handlePickerSelectProvidentFundInterestRate}
              options={providentFundInterestRateOptions}
            />
          )}
          <hr className={styles.hr} />
        </div>
      </main>
      <div className={styles.buttonBorder}>
        <button
          className={styles.calcButton}
          onClick={() => {
            openCard();
            calculatePayment();
          }}
        >
          开始计算
        </button>
      </div>
    </div>
  );
}
