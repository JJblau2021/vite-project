import React from 'react';
import {
  IconUser,
  IconList,
  IconSetting,
  IconCalendar,
  IconAppCenter,
  IconMailStroked1,
  IconMapPin,
} from '@douyinfe/semi-icons';
export const navList = [
  {
    itemKey: 'dashboard',
    text: 'Dashboard',
    icon: <IconAppCenter />,
    link: '#/',
  },
  {
    itemKey: 'userProfile',
    text: 'User Profile',
    icon: <IconUser />,
    link: '#/userProfile',
  },

  {
    itemKey: 'taskCenter',
    text: 'Task Center',
    icon: <IconList />,
    link: '#/taskCenter',
  },
  {
    itemKey: 'job',
    text: 'Tools',
    icon: <IconSetting />,
    items: [
      {
        itemKey: 'calendar',
        text: 'Calendar',
        link: '#/Calendar',
        icon: <IconCalendar />,
      },
      {
        itemKey: 'mailBox',
        text: 'Mail Box',
        icon: <IconMailStroked1 />,
        link: '#/mailbox',
      },
      {
        itemKey: 'maps',
        text: 'Maps',
        icon: <IconMapPin />,
      },
    ],
  },
];
export const defaultActiveNavs = ['dashboard'];
