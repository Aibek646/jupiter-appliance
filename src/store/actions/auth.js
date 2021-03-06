import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authIsSignUp = () => {
  return {
    type: actionTypes.AUTH_ISSIGNUP_CHANGE,
  };
};

export const authIsSignUp2 = () => {
  return {
    type: actionTypes.AUTH_ISSIGNUP_CHANGE2,
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDovBe5mz7tjrEwnvAY0xi7FpPswBWIy_o";
    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDovBe5mz7tjrEwnvAY0xi7FpPswBWIy_o";
    }
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeOut(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
