import React, { useState } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Sider from './components/Sider';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './index.less';

const AppLayout = () => {
  // const [siderWidth, setSiderWidth] = useState(200);
  // const toggleSiderWidth = () => setSiderWidth((width) => (width === 60 ? 200 : 60));
  return (
    <Layout className="app_wrapper">
      <Sider className="app_siderbar" />
      <Layout className="app_container">
        <Header
          className="app_header"
          // onControllerClick={toggleSiderWidth}
        />
        <Content className="app_content" />
        <Footer className="app_footer" />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
