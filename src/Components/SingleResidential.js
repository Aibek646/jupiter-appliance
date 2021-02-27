import React, { useEffect, useState, useCallback } from "react";
import * as actions from "../store/actions/index";
import Spinner from "./UI/Loading";
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
    <div className="wrapper__singlePage">
      <div className="singlePage">
        {singleAppliance ? (
          <div className="singlePage__column1">
            <h1>{singleAppliance.name}</h1>

            <img src={singleAppliance.image} alt="" />
          </div>
        ) : (
          <Spinner />
        )}
        <div className="singlePage__column2">
          <h1>Got one of these problems</h1>
          <ul>
            <li>Refrigerator is not cooling</li>
            <li>The ice dispenser is not functioning</li>
            <li>The water dispenser is not operational</li>
            <li>Refrigerator is making unusually loud noises</li>
            <button className="">Order Repair</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleResidential;
