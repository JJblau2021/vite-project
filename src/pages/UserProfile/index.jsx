import React from 'react';
import BaseInfo from './components/BaseInfo';
import styles from './index.module.less';
import { user1 } from './mock';
import { userProfiles } from './options';

const UserProfile = () => {
  return (
    <div className={styles.page_userProfile}>
      <BaseInfo user={user1} options={userProfiles} />
    </div>
  );
};

export default UserProfile;
