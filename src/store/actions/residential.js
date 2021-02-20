import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setAppliances = (appliances) => {
  return {
    type: actionTypes.SET_APPLIANCES,
    appliances: appliances,
  };
};

export const fetchAppliancesFailed = () => {
  return {
    type: actionTypes.FETCH_APPLIANCES_FAILED,
  };
};
export const initAppliance = () => {
  return (dispatch) => {
    axios
      .get(
        "https://jupiter-appliance-default-rtdb.firebaseio.com/appliance.json"
      )
      .then((response) => {
        dispatch(setAppliances(response.data));
      })
      .catch((error) => {
        dispatch(fetchAppliancesFailed());
      });
  };
};
