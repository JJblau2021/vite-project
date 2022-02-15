import React from 'react';
// components
import { Link } from 'react-router-dom';
import { Layout } from '@douyinfe/semi-ui';
import Ripple from '@/components/Ripple';
import Icon from '@/components/Icon';
import './index.less';

const Header = ({ onControllerClick, ...props }) => {
  return (
    <Layout.Header {...props}>
      <div className="header_container">
        <Ripple.Button
          className="header_controller"
          onClick={onControllerClick}
        >
          <Icon className="header_icon" href="icon-hamburger" />
        </Ripple.Button>
        <Link to="/login" className="header_login">
          Login
        </Link>
      </div>
    </Layout.Header>
  );
};

export default Header;
