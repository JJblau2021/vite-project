import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@douyinfe/semi-ui';
import CommonChart from '@/components/CommonChart';
// import styles from './index.module.less';

const ChartCard = ({ resizeTrigger }) => {
  return (
    <Card title="ChartCard" bordered={!1}>
      <CommonChart width="100%" height={400} resizeTrigger={resizeTrigger} />
    </Card>
  );
};
export default connect((state) => ({
  resizeTrigger: state.isSiderBarCollapsed,
}))(ChartCard);
