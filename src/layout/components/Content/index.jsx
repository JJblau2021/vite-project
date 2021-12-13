import React from "react";
import { Outlet } from "react-router";
import { Layout } from "@douyinfe/semi-ui";
import "./index.less ";

const Content = ({ ...props }) => {
  return (
    <Layout.Content {...props}>
      <Outlet />
    </Layout.Content>
  );
};

export default Content;
