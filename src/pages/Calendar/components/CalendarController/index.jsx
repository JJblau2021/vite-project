import React from 'react';
import { RadioGroup, Button } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';
import styles from './index.module.less';

const CalendarController = ({
  onChange: handleChange,
  options,
  defaultOption,
  onBtnClick: handleBtnClick,
}) => {
  return (
    <div className={styles.calendarController}>
      <RadioGroup
        className={styles.calendarModeWrapper}
        options={options}
        onChange={(e) => handleChange(e.target.value)}
        type="button"
        defaultValue={defaultOption}
      />
      <Button
        className={styles.eventCreater}
        icon={<IconPlus />}
        onClick={handleBtnClick}
      >
        Add
      </Button>
    </div>
  );
};

export default CalendarController;
