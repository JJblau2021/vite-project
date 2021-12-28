import React from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import styles from './index.module.less';

const SiderNav = ({ navList }) => {
  const onNavSelect = (prams) => {
    console.log(prams);
  };

  return (
    <Nav
      className={styles.header_nav}
      items={navList}
      onSelect={onNavSelect}
      header={{
        logo: <IconSemiLogo className={styles.logo} />,
        text: 'JJBLAU',
      }}
      footer={{ collapseButton: !0 }}
    />
  );
};

export default SiderNav;
