import React, { useState } from 'react';
import { Calendar as DouYinCalendar } from '@douyinfe/semi-ui';
import CalendarController from './components/CalendarController';
import EventCreateModal from './components/EventCreateModal';
import styles from './index.module.less';

const Calendar = () => {
  const dailyStyle = {
    borderRadius: '3px',
    boxSizing: 'border-box',
    border: 'var(--semi-color-primary) 1px solid',
    padding: '10px',
    backgroundColor: 'var(--semi-color-primary-light-default)',
    height: '100%',
    overflow: 'hidden',
  };
  const defaultEvents = [
    {
      key: '0',
      start: new Date(2021, 12, 25, 14, 45, 0),
      end: new Date(2021, 12, 26, 6, 18, 0),
      children: <div style={dailyStyle}>6月25日 14:45 ~ 7月26日 6:18</div>,
    },
    {
      key: '1',
      start: new Date(2021, 6, 18, 10, 0, 0),
      end: new Date(2021, 6, 30, 8, 0, 0),
      children: <div style={dailyStyle}>7月18日 10:00 ~ 7月30日 8:00</div>,
    },
    {
      key: '2',
      start: new Date(2021, 6, 19, 20, 0, 0),
      end: new Date(2021, 6, 23, 14, 0, 0),
      children: <div style={dailyStyle}>7月19日 20:00 ~ 7月23日 14:00</div>,
    },
    {
      key: '3',
      start: new Date(2021, 6, 21, 6, 0, 0),
      end: new Date(2021, 6, 25, 6, 0, 0),
      children: <div style={dailyStyle}>7月21日 6:00 ~ 7月25日 6:00</div>,
    },
    {
      key: '4',
      allDay: true,
      start: new Date(2021, 6, 22, 8, 0, 0),
      children: <div style={dailyStyle}>7月22日 全天</div>,
    },
    {
      key: '5',
      start: new Date(2021, 6, 22, 9, 0, 0),
      end: new Date(2021, 6, 23, 23, 0, 0),
      children: <div style={dailyStyle}>7月22日 9:00 ~ 7月23日 23:00</div>,
    },
    {
      key: '6',
      start: new Date(2021, 6, 23, 8, 32, 0),
      children: <div style={dailyStyle}>7月23日 8:32</div>,
    },
    {
      key: '7',
      start: new Date(2021, 6, 23, 14, 30, 0),
      end: new Date(2021, 6, 23, 20, 0, 0),
      children: <div style={dailyStyle}>7月23日 14:30-20:00</div>,
    },
    {
      key: '8',
      start: new Date(2021, 6, 25, 8, 0, 0),
      end: new Date(2021, 6, 27, 6, 0, 0),
      children: <div style={dailyStyle}>7月25日 8:00 ~ 7月27日 6:00</div>,
    },
    {
      key: '9',
      start: new Date(2021, 6, 26, 10, 0, 0),
      end: new Date(2021, 6, 27, 16, 0, 0),
      children: <div style={dailyStyle}>7月26日 10:00 ~ 7月27日 16:00</div>,
    },
  ];
  const [calendarMode, setCalendarMode] = useState('month');
  const [events, setEvents] = useState(defaultEvents);
  const [eventCreaterVisible, setEventCreaterVisible] = useState(!1);
  const changeCalendarMode = (curMode) => setCalendarMode(curMode);
  const addEvent = (newEvent) => setEvents([...events, newEvent]);
  const showEventCreater = () => setEventCreaterVisible(!0);
  const hideEventCreater = () => setEventCreaterVisible(!1);

  const calendarModes = ['day', 'week', 'month'];
  return (
    <div className={styles.calendarController}>
      <CalendarController
        onChange={changeCalendarMode}
        options={calendarModes}
        onBtnClick={showEventCreater}
        defaultOption={'month'}
      />
      <DouYinCalendar mode={calendarMode} events={events} />
      <EventCreateModal
        visible={eventCreaterVisible}
        hideModal={hideEventCreater}
        createEvent={addEvent}
      />
    </div>
  );
};

export default Calendar;
