import * as actionTypes from "../actions/actionTypes";

const initialState = {
  appliance: null,
  error: false,
  reviews: [],
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
    case actionTypes.SEND_COMMENT_SUCCESS:
      return {
        ...state,
        reviews: state.reviews.concat(action.orderData),
      };
    case actionTypes.FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: action.reviews,
      };
    case actionTypes.FETCH_REVIEW_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
