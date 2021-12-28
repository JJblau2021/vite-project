import React from 'react';
import CardGroup from './components/CardGroup';
import ChartCard from './components/ChartCard';
import styles from './index.module.less';

const Dashboard = () => {
  const cardGroupOptions = [
    { title: 'Semi Design1', content: 'blabla...' },
    { title: 'Semi Design2', content: 'blabla...' },
    { title: 'Semi Design3', content: 'blabla...' },
    { title: 'Semi Design4', content: 'blabla...' },
  ];
  return (
    <div className="page_body_container">
      <CardGroup options={cardGroupOptions} />
      <ChartCard />
    </div>
  );
};

export default Dashboard;
