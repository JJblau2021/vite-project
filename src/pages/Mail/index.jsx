import React, { useState } from 'react';
import { Card } from '@douyinfe/semi-ui';
import MailNav from './components/MailNav';
import MailBoxContent from './components/MailBoxContent';
import './index.less';

import { mailboxNavList } from './options';

const Mail = () => {
  const [curNav, setCurNav] = useState('empty');
  const handelSelect = (item) => {
    setCurNav(item);
  };
  const MailBox = (
    <div className="mailbox_wrapper">
      <MailNav navList={mailboxNavList} onSelect={handelSelect} nav={curNav} />
      <MailBoxContent content={curNav} />
    </div>
  );

  return (
    <Card title="Mail Box" bordered={!1}>
      {MailBox}
    </Card>
  );
};

export default Mail;
