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
