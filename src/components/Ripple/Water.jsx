import React, { useState, useEffect } from 'react';
import styles from './index.module.less';

const RADIUS = 8;
const Water = ({ positionX, positionY, fadeOutActive }) => {
  const [visible, setVisible] = useState(!1);
  const [isWaterActive, setIsWaterActive] = useState(!1);
  useEffect(() => {
    setVisible(!0);
    setTimeout(showWater, 100);
    // setTimeout(setVisible, 1500, !1);
  }, []);

  const showWater = () => {
    setIsWaterActive(!0);
  };

  const positionStyle = {
    marginTop: positionY - RADIUS,
    marginLeft: positionX - RADIUS,
  };
  const sizeStyle = {
    width: RADIUS * 2,
    height: RADIUS * 2,
  };
  return (
    visible && (
      <div className={styles.water_container}>
        <div
          className={[
            styles.water,
            isWaterActive && styles.water_active,
            fadeOutActive && styles.water_hiden,
          ].join(' ')}
          style={{ ...positionStyle, ...sizeStyle }}
        />
      </div>
    )
  );
};

export default Water;
