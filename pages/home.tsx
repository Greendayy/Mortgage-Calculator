"use client";
import { RefObject, useState } from "react";
import styles from "../styles/Home.module.css";
import { Button, Space, Picker, Form, PickerRef } from "antd-mobile";
import { providentFundPeriodOptions } from "../db/pickerData";

export default function home() {
  const [providentFundPeriodOptionsValue, providentFundPeriodOptionsSetValue] =
    useState<(string | null)[]>([]);

  return (
    <Form layout="horizontal">
      <Form.Item
        name="gjjnx"
        label="公积金年限"
        trigger="onConfirm"
        onClick={(e, pickerRef: RefObject<PickerRef>) => {
          pickerRef.current?.open();
        }}
      >
        <Picker
          columns={providentFundPeriodOptions}
          value={providentFundPeriodOptionsValue}
          onConfirm={providentFundPeriodOptionsSetValue}
          onSelect={(val, extend) => {
            console.log("onSelect", val, extend.items);
          }}
        >
          {(items, {}) => {
            return (
              <Space align="center">
                {/* <Button onClick={open}>选择</Button> */}
                {items.every((item) => item === null)
                  ? "30年"
                  : items.map((item) => item?.label ?? "未选择").join(" - ")}
              </Space>
            );
          }}
        </Picker>
      </Form.Item>
    </Form>
  );
}
