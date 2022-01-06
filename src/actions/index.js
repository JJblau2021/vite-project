import {
  COLLAPSE_SIDER_BAR,
  OPEN_SIDER_BAR_COLLAPSE,
  CLOSE_SIDER_BAR_COLLAPSE,
} from './constants';

export const collapseSiderBar = () => ({ type: COLLAPSE_SIDER_BAR });
export const openSiderBarCollapse = () => ({ type: OPEN_SIDER_BAR_COLLAPSE });
export const closeSiderBarCollapse = () => ({ type: CLOSE_SIDER_BAR_COLLAPSE });
