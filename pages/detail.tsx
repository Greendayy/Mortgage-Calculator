"use client";
import { Card, NavBar, Toast } from "antd-mobile";
import { useRouter } from "next/router";

export default function detail() {
  const router = useRouter();

  function handleBack() {
    router.push("/");
  }
  const tost = () =>
    Toast.show({
      content: "月供将以等额本息的形式展现",
      duration: 1000,
    });
  return (
    <div>
      <header>
        <title>还款详情</title>
      </header>
      <NavBar onBack={handleBack}>还款详情</NavBar>
      <section>
        <h1>贷款总额{10}万</h1>
        <p>
          {" "}
          首付{"--"},公积金贷{"-"}万·{"-"}年·{"-"}利率，商业贷{"-"}万·{"-"}年·
          {"-"}利率
        </p>
        <Card>
          <table>
            <tbody>
              <tr>
                <th scope="col">等额本息</th>
                <th scope="col">等额本金</th>
              </tr>
              <tr>
                <td scope="row">
                  每月应还（元）<p>{"516"}</p>
                </td>
                <td scope="row">
                  首月应还（元）<p>{"665"}</p>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  利息总额（万元）<p>{"8.6"}</p>
                </td>
                <td scope="row">
                  利息总额（万元）<p>{"7.0"}</p>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  特点<p>{"每月月供稳定"}</p>
                </td>
                <td scope="row">
                  特点<p>{"每月递减1元"}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="debx"
                    name="drone"
                    value="debx"
                    onClick={tost}
                    checked
                  />
                  <label htmlFor="debx">优先看等额本息</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="debj"
                    name="drone"
                    value="dkbj"
                    onClick={tost}
                  />
                  <label htmlFor="debj">优先看等额本金</label>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
      <section>
        <h1>还款细则</h1>
        <table>
          <tbody>
            <tr>
              <th scope="col">{""}</th>
              <th scope="col">等额本息</th>
              <th scope="col">等额本金</th>
            </tr>
            <tr>
              <th scope="row">第{1}个月</th>
              <td scope="row">¥{516}</td>
              <td scope="row">¥{665}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
{
  /* <td scope="row" onClick={tost}>
{516}元
</td> */
}
