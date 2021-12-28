import React from 'react';
import {
  IconDownloadStroked,
  IconSendStroked,
  IconElementStroked,
} from '@douyinfe/semi-icons';

export const mailboxNavList = [
  {
    itemKey: 'personalCollection',
    text: 'Personal Collection',
    items: [
      { itemKey: 'inBox', text: 'InBox', icon: <IconDownloadStroked /> },
      { itemKey: 'sent', text: 'Sent', icon: <IconSendStroked /> },
    ],
  },
  {
    itemKey: 'smartMailbox',
    text: 'Smart Mailbox',
    items: [
      { itemKey: 'today', text: 'Today', icon: <IconElementStroked /> },
      {
        itemKey: 'yesterday',
        text: 'Yesterday',
        icon: <IconElementStroked />,
      },
    ],
  },
];
