import React from 'react';
import { connect } from 'react-redux';
import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import styles from './index.module.less';
import { collapseSiderBar } from '@/actions';

const SiderNav = ({ navList, dispatch, isCollapsed }) => {
  const onNavSelect = (prams) => {
    console.log(prams);
  };
  const toggleCollapse = () => dispatch(collapseSiderBar());

  return (
    <Nav
      className={styles.header_nav}
      items={navList}
      onSelect={onNavSelect}
      isCollapsed={isCollapsed}
      onCollapseChange={toggleCollapse}
      header={{
        logo: <IconSemiLogo className={styles.logo} />,
        text: 'JJBLAU',
      }}
      footer={{ collapseButton: !0 }}
    />
  );
};

export default connect((state) => ({ isCollapsed: state.isSiderBarCollapsed }))(
  SiderNav,
);
