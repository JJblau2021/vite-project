import {
  COLLAPSE_SIDER_BAR,
  OPEN_SIDER_BAR_COLLAPSE,
  CLOSE_SIDER_BAR_COLLAPSE,
} from '../actions/constants';
const initialState = {
  isSiderBarCollapsed: !1,
  useSiderBarCollapse: !0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDER_BAR:
      return {
        ...state,
        isSiderBarCollapsed:
          state.useSiderBarCollapse && !state.isSiderBarCollapsed,
      };
    case OPEN_SIDER_BAR_COLLAPSE:
      return { ...state, useSiderBarCollapse: !0 };
    case CLOSE_SIDER_BAR_COLLAPSE:
      return { ...state, useSiderBarCollapse: !1, isSiderBarCollapsed: !0 };
    default:
      return state;
  }
};

export default reducer;
