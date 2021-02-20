import * as actionTypes from "../actions/actionTypes";

const initialState = {
  appliances: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_APPLIANCES:
      return {
        ...state,
        appliances: action.appliances,
      };
    case actionTypes.FETCH_APPLIANCES_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
