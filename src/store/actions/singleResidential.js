import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setSingleAppliance = (appliance) => {
  return {
    type: actionTypes.SET_SINGLE_APPLIANCE,
    appliance: appliance,
  };
};

export const failedSingleAppliance = () => {
  return {
    type: actionTypes.FAILED_SINGLE_APPLIANCE,
  };
};

export const initSingleAppliance = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://jupiter-appliance-default-rtdb.firebaseio.com/appliance/${id}.json`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setSingleAppliance(res.data));
      })
      .catch((err) => {
        dispatch(failedSingleAppliance());
      });
  };
};

export const sendCommentSuccess = (orderData) => {
  return {
    type: actionTypes.SEND_COMMENT_SUCCESS,
    orderData: orderData,
  };
};

export const sendCommentFailed = (error) => {
  return {
    type: actionTypes.SEND_COMMENT_FAILED,
    error: error,
  };
};

export const sendComment = (orderData, token) => {
  return (dispatch) => {
    axios
      .post(
        "https://jupiter-appliance-default-rtdb.firebaseio.com/comments.json?auth?" +
          token,
        orderData
      )
      .then((res) => {
        dispatch(sendCommentSuccess(orderData));
      })
      .catch((error) => {
        dispatch(sendCommentFailed(error));
      });
  };
};

export const fetchReviewSuccess = (reviews) => {
  return {
    type: actionTypes.FETCH_REVIEW_SUCCESS,
    reviews: reviews,
  };
};

export const fetchReviewFailed = (err) => {
  return {
    type: actionTypes.FETCH_REVIEW_FAILED,
    err: err,
  };
};

export const fetchReview = () => {
  return (dispatch) => {
    axios
      .get(
        "https://jupiter-appliance-default-rtdb.firebaseio.com/comments.json"
      )
      .then((res) => {
        console.log(res.data);
        const fetchedReview = [];
        for (let key in res.data) {
          fetchedReview.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchReviewSuccess(fetchedReview));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchReviewFailed(err));
      });
  };
};
