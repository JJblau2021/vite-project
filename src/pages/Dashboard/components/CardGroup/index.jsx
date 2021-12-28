import React from 'react';
import { Card } from '@douyinfe/semi-ui';
import styles from './index.module.less';

const CardGroup = ({ options }) => {
  const CardList = options.map(({ title, content }) => (
    <Card
      title={title}
      className={styles.card}
      key={title}
      bordered={!1}
      bodyStyle={{ height: 200, overflowY: 'scroll' }}
    >
      {content}
    </Card>
  ));
  return <div className={styles.cardGroup_wrapper}>{CardList}</div>;
};

export default CardGroup;
