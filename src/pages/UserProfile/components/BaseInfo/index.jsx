import React from 'react';
import { Descriptions } from '@douyinfe/semi-ui';

const BaseInfo = ({ user, options }) => {
  const getInfoList = (curUser, curOptions) => {
    return Object.entries(curOptions).map(([key, value]) => ({
      key: value,
      value: curUser[key],
    }));
  };

  return <Descriptions data={getInfoList(user, options)} />;
};

export default BaseInfo;
