import React from 'react';
import { Card } from '@douyinfe/semi-ui';
import CommonChart from '@/components/CommonChart';
import styles from './index.module.less';

const ChartCard = () => {
  return (
    <Card title="ChartCard" bordered={!1}>
      <CommonChart width="100%" height={400} resizeTrigger />
    </Card>
  );
};
export default ChartCard;
