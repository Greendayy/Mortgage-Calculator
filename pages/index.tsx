"use client";
import styles from "../styles/Home.module.css";
import {
  Button,
  Card,
  DatePicker,
  DatePickerRef,
  Form,
  Input,
  Picker,
  Stepper,
  Switch,
  Tabs,
  TextArea,
} from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";
import Link from "next/link";

export default function home() {
  return (
    <div>
      <header>
        <title>房贷计算器</title>
      </header>

      <section>
        <Card
          style={{ padding: 0, border: "none" }}
          headerClassName={styles.historyCardHeader}
          bodyClassName={styles.historyCardBody}
          title={
            <div style={{ fontWeight: "bold", fontSize: "0.67rem" }}>
              房屋总价{" -- "}万
            </div>
          }
          extra={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.46rem",
              }}
            >
              查看历史
              <Link href="/history" style={{ color: "#fff" }}>
                <RightOutline />
              </Link>
            </div>
          }
        >
          <p
            style={{
              fontSize: "0.46rem",
              padding: "0.3rem 0.6rem 2.5rem 0.6rem!important",
              lineHeight: "0.6rem",
            }}
          >
            首付{"--"},公积金贷{"-"}万·{"-"}年·{"-"}利率，商业贷{"-"}万·{"-"}年·
            {"-"}
            利率、等额本息&等额本金
          </p>
        </Card>
        <Card
          className={styles.detailCard}
          title={
            <div>
              首付款{" "}
              <p style={{ fontWeight: "bold", fontSize: "0.67rem" }}>{"--"}</p>
            </div>
          }
          extra={
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              每月应还{"(等额本息)"}
              <figure
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  fontSize: "0.67rem",
                  fontWeight: "bold",
                }}
              >
                {516}
                <figcaption
                  style={{ fontSize: "0.3rem", paddingTop: "0.2rem" }}
                >
                  元
                </figcaption>
              </figure>
              <p
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                对比{"等额本金"}月供
                <Link href="/detail" style={{ color: "#999" }}>
                  <RightOutline />
                </Link>
              </p>
            </div>
          }
        />
      </section>
      <main>
        <section>
          <Tabs defaultActiveKey="adkze">
            <Tabs.Tab title="计算方式" key="jsfs" disabled />

            <Tabs.Tab title="按贷款总额" key="adkze">
              <Form layout="horizontal">
                <Form.Item
                  name="dkje"
                  label="贷款金额"
                  extra={"万"}
                  // rules={[{ required: true, message: "姓名不能为空" }]}
                >
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
              </Form>
            </Tabs.Tab>
            <Tabs.Tab title="按房屋总价" key="afwzj">
              <Form layout="horizontal">
                <Form.Item name="fwzj" label="房屋总价" extra={"万"}>
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
                <Form.Item
                  name="sfxz"
                  label="首付选择"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value ? dayjs(value).format("YYYY-MM-DD") : "30%（0万）"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item
                  name="dkje"
                  label="贷款金额"
                  extra={"万"}
                  // rules={[{ required: true, message: "姓名不能为空" }]}
                >
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
              </Form>
            </Tabs.Tab>
          </Tabs>
        </section>
        <section>
          <Tabs defaultActiveKey="zhd">
            <Tabs.Tab title="贷款方式" key="dkfs" disabled />

            <Tabs.Tab title="组合贷" key="zhd">
              <Form layout="horizontal">
                <Form.Item name="gjjje" label="公积金金额" extra={"万"}>
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
                <Form.Item
                  name="gjjnx"
                  label="公积金年限"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value ? dayjs(value).format("YYYY-MM-DD") : "30年"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item
                  name="gjjll"
                  label="公积金利率"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value
                        ? dayjs(value).format("YYYY-MM-DD")
                        : "3.25%（最新基准利率1倍）"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item name="sdje" label="商贷金额" extra={"万"}>
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
                <Form.Item
                  name="sdnx"
                  label="商贷年限"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value
                        ? dayjs(value).format("YYYY-MM-DD")
                        : "3.25%（最新基准利率1倍）"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item
                  name="llfs"
                  label="利率方式"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value
                        ? dayjs(value).format("YYYY-MM-DD")
                        : "3.25%使用最新LPR"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item name="lpr" label="LPR" extra={"%"}>
                  <Input onChange={console.log} placeholder="4.65" />
                </Form.Item>
                <Form.Item name="jd" label="基点" extra={"BP(‱)"}>
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
                <Form.Item name="sdll" label="商贷利率" extra={"4.65%"}>
                  <Input onChange={console.log} placeholder="4.65%+0‱=" />
                </Form.Item>
              </Form>
            </Tabs.Tab>
            <Tabs.Tab title="商业贷" key="syd">
              <Form layout="horizontal">
                <Form.Item
                  name="sdnx"
                  label="商贷年限"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value
                        ? dayjs(value).format("YYYY-MM-DD")
                        : "3.25%（最新基准利率1倍）"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item
                  name="llfs"
                  label="利率方式"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value
                        ? dayjs(value).format("YYYY-MM-DD")
                        : "3.25%使用最新LPR"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item name="lpr" label="LPR" extra={"%"}>
                  <Input onChange={console.log} placeholder="4.65" />
                </Form.Item>
                <Form.Item name="jd" label="基点" extra={"BP(‱)"}>
                  <Input onChange={console.log} placeholder="0" />
                </Form.Item>
                <Form.Item name="sdll" label="商贷利率" extra={"4.65%"}>
                  <Input onChange={console.log} placeholder="4.65%+0‱=" />
                </Form.Item>
              </Form>
            </Tabs.Tab>
            <Tabs.Tab title="公积金贷" key="afwzj">
              <Form layout="horizontal">
                <Form.Item
                  name="gjjnx"
                  label="公积金年限"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value ? dayjs(value).format("YYYY-MM-DD") : "30年"
                    }
                  </DatePicker>
                </Form.Item>
                <Form.Item
                  name="gjjll"
                  label="公积金利率"
                  trigger="onConfirm"
                  onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                  }}
                >
                  <DatePicker>
                    {(value) =>
                      value
                        ? dayjs(value).format("YYYY-MM-DD")
                        : "3.25%（最新基准利率1倍）"
                    }
                  </DatePicker>
                </Form.Item>
              </Form>
            </Tabs.Tab>
          </Tabs>
        </section>
      </main>
      <Button block type="submit" color="primary" size="large">
        开始计算
      </Button>
    </div>
  );
}
