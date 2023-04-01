import Link from "next/link";
import styles from "../styles/History.module.css";
("use client");
import { NavBar } from "antd-mobile";
import { useRouter } from "next/router";

export default function history() {
  const router = useRouter();

  function handleBack() {
    router.push("/");
  }

  return (
    <div>
      <header>
        <title>历史记录</title>
      </header>
      <NavBar onBack={handleBack}>历史记录</NavBar>
      <table>
        <tbody>
          <tr>
            <th scope="col">公积金贷{"30"}年</th>
            <th scope="col">商业贷{"30"}年</th>
            <th scope="col">每月应还{"(等额本息)"}</th>
          </tr>
          <tr>
            <td scope="row">{0}万</td>
            <td scope="row">{10}万</td>
            <td scope="row">{516}元</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
