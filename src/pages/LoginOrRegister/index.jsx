/** LoginOrRegister 登录注册页面 */
import React from 'react';
import { Card } from '@douyinfe/semi-ui';
import LoginOrRegisterForm from './components/LoginOrRegisterForm';
import styles from './index.module.less';

const LoginOrRegister = (props) => {
  const { type } = props;
  const jumpToHome = () => {
    location.hash = '/';
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Card
          className={styles.card}
          bodyStyle={{ paddingTop: 0 }}
          headerLine={!1}
          header={
            <div className={styles.cardTitle}>
              <h6 onClick={jumpToHome}>JJBLAU</h6>
            </div>
          }
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
