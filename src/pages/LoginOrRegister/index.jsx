/** LoginOrRegister 登录注册页面 */
import { Card } from "@douyinfe/semi-ui";
import LoginOrRegisterForm from "./components/LoginOrRegisterForm";
import "./index.less";

const LoginOrRegister = (props) => {
  const { type } = props;

  return (
    <div className="wrapper">
      <div className="container">
        <Card
          className="card"
          bodyStyle={{ paddingTop: 0 }}
          headerLine={!1}
          header={<h6 className="cardTitle">JJBLAU</h6>}
          bordered={!1}
          shadows="always"
        >
          <LoginOrRegisterForm type={type} />
        </Card>
      </div>
    </div>
  );
};

export default LoginOrRegister;
