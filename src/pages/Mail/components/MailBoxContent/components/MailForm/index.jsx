import React from 'react';
import { Form, Button, Space } from '@douyinfe/semi-ui';
import styles from './index.module.less';
const { Input, Slot } = Form;
const MailForm = () => {
  return (
    <Form className={styles.mail_form}>
      <div className={styles.mail_header}>
        <Input field="theme" placeholder="Theme" noLabel />
        <Input field="mailRecipient" placeholder="Mail Recipient" noLabel />
        <Input field="copyTo" placeholder="Copy To" noLabel />
      </div>
      <div className={styles.mail_body}>
        <Form.TextArea
          field="mailContent"
          placeholder="Please enter the content"
          noLabel
          rows={20}
        />
        <Slot>
          <Space>
            <Button size="large" type="primary">
              Send
            </Button>
            <Button size="large" type="tertiary">
              Save
            </Button>
          </Space>
        </Slot>
      </div>
    </Form>
  );
};

export default MailForm;
