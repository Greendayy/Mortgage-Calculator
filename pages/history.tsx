import Link from "next/link";
import styles from "../styles/History.module.css";
import { NavBar, Toast } from "antd-mobile";

export default function History() {
  const back = () => {
    <Link href="/">{""}</Link>;
  };
  // const back = () =>
  //   Toast.show({
  //     content: "点击了返回区域",
  //     duration: 1000,
  //   });
  return (
    <div>
      <head>
        <title>历史记录</title>
      </head>
      <NavBar onBack={back}>历史记录</NavBar>
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
