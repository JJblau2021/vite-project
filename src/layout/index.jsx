import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Sider from './components/Sider';
import Header from './components/Header';
import Content from './components/Content';
// import Footer from './components/Footer';
import './index.less';

import { navList, defaultActiveNavs } from './options';

const AppLayout = () => {
  return (
    <Layout className="app_wrapper">
      <Sider
        className="app_siderbar"
        navList={navList}
        defaultActiveNavs={defaultActiveNavs}
      />
      <Layout className="app_container">
        <Header className="app_header" />
        <Content className="app_content" />
        {/* <Footer className="app_footer" /> */}
      </Layout>
    </Layout>
  );
};

export default AppLayout;
