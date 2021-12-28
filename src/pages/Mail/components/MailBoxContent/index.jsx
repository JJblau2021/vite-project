import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';
import MailForm from './components/MailForm';

const MailBoxContent = ({ content }) => {
  const BoxContent = () => {
    switch (content) {
      case 'mail':
        return <MailForm />;
      default:
        return (
          <Empty
            image={
              <IllustrationConstruction style={{ width: 150, height: 150 }} />
            }
            darkModeImage={
              <IllustrationConstructionDark
                style={{ width: 150, height: 150 }}
              />
            }
            title={'未选择邮件'}
            description={'写一封邮件吧'}
          />
        );
    }
  };
  return (
    <div
      className={
        content === 'empty' ? 'mailbox_form mailbox_form_empty' : 'mailbox_form'
      }
    >
      <BoxContent />
    </div>
  );
};

export default MailBoxContent;
