import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import SiderNav from './components/SiderNav';
import './index.less';

const Sider = ({ navList, ...props }) => {
  return (
    <Layout.Sider {...props}>
      {/* <div className="sider_header">SiderHeader</div> */}
      <SiderNav navList={navList} />
    </Layout.Sider>
  );
};

export default Sider;
