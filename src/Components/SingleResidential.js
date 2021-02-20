import React, { useEffect, useState, useCallback } from "react";
import * as actions from "../store/actions/index";

import "./styles/SingleResidential.css";
import "../Components/styles/SingleResidential.css";
import { useDispatch, useSelector } from "react-redux";

const SingleResidential = ({ match }) => {
  const id = match.params.id;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const singleAppliance = useSelector((state) => {
    return state.singleResidential.appliance;
  });

  const onInitSingleAppliance = useCallback(
    (id) => dispatch(actions.initSingleAppliance(id)),
    [dispatch]
  );

  useEffect(() => {
    onInitSingleAppliance(id);
  }, [onInitSingleAppliance]);

  return (
    <div className="singlePage">
      <h1>Single Page</h1>
    </div>
  );
};

export default SingleResidential;
