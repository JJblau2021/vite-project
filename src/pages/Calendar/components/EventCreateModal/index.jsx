import React from 'react';
import { Modal } from '@douyinfe/semi-ui';

const EventCreateModal = ({ visible, hideModal, createEvent }) => {
  const handleOk = () => {
    hideModal();
  };
  return (
    <Modal
      visible={visible}
      onCancel={hideModal}
      title="Create Event"
      onOk={handleOk}
    >
      aaaa
    </Modal>
  );
};

export default EventCreateModal;
