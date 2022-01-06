import { COLLAPSE_SIDER_BAR } from '../actions/constants';
const initialState = {
  isSiderBarCollapsed: !1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDER_BAR:
      return { ...state, isSiderBarCollapsed: !state.isSiderBarCollapsed };
    default:
      return state;
  }
};

export default reducer;
