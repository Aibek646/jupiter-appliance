import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../hoc/utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: null,
  isSignUp: true,
};

const authChange = (state, action) => {
  return updateObject(state, {
    isSignUp: false,
    error: null,
  });
};

const authChange2 = (state, action) => {
  return updateObject(state, {
    isSignUp: true,
    error: null,
  });
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_ISSIGNUP_CHANGE:
      return authChange(state, action);
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_ISSIGNUP_CHANGE2:
      return authChange2(state, action);
    case actionTypes.LOGOUT:
      return authLogout();

    default:
      return state;
  }
};

export default reducer;
