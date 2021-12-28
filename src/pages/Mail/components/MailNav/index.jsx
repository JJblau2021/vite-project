import React from 'react';
import { Nav, Toast, Button } from '@douyinfe/semi-ui';
import { IconEdit2Stroked } from '@douyinfe/semi-icons';
import styles from './index.module.less';

const MailNav = ({ nav, navList, onSelect }) => {
  const handleSelect = ({ itemKey }) => {
    Toast.info(itemKey);
    console.log('selected', itemKey);
    onSelect instanceof Function && onSelect(itemKey);
  };
  const handleClick = () => {
    Toast.info('mail');
    onSelect instanceof Function && onSelect('mail');
  };

  return (
    <div className="mailbox_nav">
      <Button
        className={styles.mail}
        icon={<IconEdit2Stroked />}
        size="large"
        onClick={handleClick}
      >
        Mail
      </Button>
      <Nav
        className={styles.mailNav}
        items={navList}
        onSelect={handleSelect}
        selectedKeys={[nav]}
        defaultOpenKeys={navList.map((el) => el.itemKey)}
        style={{ height: 700 }}
      />
    </div>
  );
};

export default MailNav;
