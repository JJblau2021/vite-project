import React, { useState, useEffect } from 'react';
import { Button } from '@douyinfe/semi-ui';
import Water from './Water';
import styles from './index.module.less';

const Ripple = ({ children }) => {
  const [waterArr, setWaterArr] = useState([]);
  useEffect(() => () => setWaterArr([]), []);
  const handleMouseDown = (e) => {
    const {
      nativeEvent: { offsetX: x, offsetY: y },
    } = e;
    setWaterArr([...waterArr, { x, y, hide: !1 }]);
  };
  const handleMouseUp = () => {
    const sum = waterArr.length;
    const newArr = [...waterArr];
    newArr[sum - 1].hide = !0;
    setTimeout(setWaterArr, 400, newArr);
  };

  return (
    <div
      className={[styles.btn].join(' ')}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
      <span className={styles.water_wrapper}>
        {waterArr.map(({ x, y, hide }, i) => (
          <Water key={i} positionX={x} positionY={y} fadeOutActive={hide} />
        ))}
      </span>
    </div>
  );
};

const RippleBtn = ({ children, ...restConfig }) => {
  return (
    <Ripple>
      <Button {...restConfig}>{children}</Button>
    </Ripple>
  );
};
Ripple.Button = RippleBtn;

export default Ripple;
