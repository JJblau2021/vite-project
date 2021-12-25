import React from 'react';
import { Nav } from '@douyinfe/semi-ui';
import {
  IconUser,
  IconStar,
  IconSetting,
  IconCalendar,
} from '@douyinfe/semi-icons';
import styles from './index.module.less';

const SiderNav = () => {
  const onNavSelect = (props) => {
    console.log(props);
  };
  const navList = [
    { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
    { itemKey: 'union', text: '工会中心', icon: <IconStar /> },
    {
      itemKey: 'job',
      text: 'Tools',
      icon: <IconSetting />,
      items: [
        {
          itemKey: 'Calendar',
          text: 'Calendar',
          link: '#/Calendar',
          icon: <IconCalendar />,
        },
      ],
    },
  ];
  return (
    <Nav
      className={styles.header_nav}
      items={navList}
      onSelect={onNavSelect}
      header={{ logo: <IconUser />, text: 'JJBLAU' }}
      footer={{ collapseButton: !0 }}
    />
  );
};

export default SiderNav;
