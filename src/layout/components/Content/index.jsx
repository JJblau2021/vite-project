import React from 'react';
import { Outlet } from 'react-router';
import { Layout, Breadcrumb } from '@douyinfe/semi-ui';
import './index.less';

const Content = ({ ...props }) => {
  const routes = [
    { path: '/', href: '#/', name: 'home' },
    { path: '/', href: '#/login', name: 'login' },
    { path: '/', href: '#/login', name: 'login' },
  ];
  return (
    <Layout.Content {...props}>
      <Breadcrumb routes={routes} />
      <Outlet />
    </Layout.Content>
  );
};

export default Content;
