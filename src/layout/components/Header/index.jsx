import React from 'react';
// components
import { Link } from 'react-router-dom';
import { Layout, Button } from '@douyinfe/semi-ui';
import Icon from '@/components/Icon';
import './index.less';

const Header = ({ onControllerClick, ...props }) => {
  return (
    <Layout.Header {...props}>
      <div className="header_container">
        <Button className="header_controller" onClick={onControllerClick}>
          <Icon className="header_icon" href="icon-hamburger" />
        </Button>
        <Link to="/login" className="header_login">
          Login
        </Link>
      </div>
    </Layout.Header>
  );
};

export default Header;
