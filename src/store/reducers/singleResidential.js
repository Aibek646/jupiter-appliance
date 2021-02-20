import * as actionTypes from "../actions/actionTypes";

const initialState = {
  appliance: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SINGLE_APPLIANCE:
      return {
        ...state,
        appliance: action.appliance,
      };
    case actionTypes.FAILED_SINGLE_APPLIANCE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
