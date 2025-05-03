"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SupabaseSelect } from "../components/Supabase";

export default function Sub2() {
  const [bank, setBank] = useState<number[]>(Array(11).fill(0));
  const bankName = [
    "合作金庫",
    "台北富邦",
    "國泰世華",
    "兆豐銀行",
    "王道銀行",
    "新光銀行",
    "中華郵政",
    "玉山銀行",
    "台新銀行",
    "中國信託",
    "累積存款",
  ];
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await SupabaseSelect("myangularsub2");
      if (data && Array.isArray(data) && data.length > 0) {
        const firstRow = data[0]; // 只取第一筆
        const bankValues: number[] = [];
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          bankValues.push(firstRow[`bank${i + 1}`] || 0);
          sum += firstRow[`bank${i + 1}`];
        }
        bankValues.push(sum || 0);
        setBank(bankValues);
      } else {
        console.error("Supabase error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {bankName[0]}:{bank[0]}
      <br />
      {bankName[1]}:{bank[1]}
      <br />
      {bankName[2]}:{bank[2]}
      <br />
      {bankName[3]}:{bank[3]}
      <br />
      {bankName[4]}:{bank[4]}
      <br />
      {bankName[5]}:{bank[5]}
      <br />
      {bankName[6]}:{bank[6]}
      <br />
      {bankName[7]}:{bank[7]}
      <br />
      {bankName[8]}:{bank[8]}
      <br />
      {bankName[9]}:{bank[9]}
      <br />
      {bankName[10]}:{bank[10]}
    </>
  );
}
