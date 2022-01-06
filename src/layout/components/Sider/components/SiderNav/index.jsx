import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import styles from './index.module.less';
import {
  collapseSiderBar,
  closeSiderBarCollapse,
  openSiderBarCollapse,
} from '@/actions';

const SiderNav = ({ navList, dispatch, isCollapsed, useCollapse }) => {
  useEffect(() => {
    if (window) {
      checkCollapseUsable();
      window.addEventListener('resize', checkCollapseUsable);
    }
    return () => window.removeEventListener('resize', checkCollapseUsable);
  }, []);
  const checkCollapseUsable = () =>
    dispatch(
      window.innerWidth <= 480
        ? closeSiderBarCollapse()
        : openSiderBarCollapse(),
    );
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
      footer={{ collapseButton: useCollapse }}
    />
  );
};

export default connect((state) => ({
  isCollapsed: state.isSiderBarCollapsed,
  useCollapse: state.useSiderBarCollapse,
}))(SiderNav);
