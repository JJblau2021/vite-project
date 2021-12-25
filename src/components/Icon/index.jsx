import React, { memo } from "react";
import "./index.less";
const Icon = ({ className, href }) => {
  return (
    <div className={["icon_wrapper", className].join(" ")}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#${href}`}></use>
      </svg>
    </div>
  );
};
export default memo(Icon);
