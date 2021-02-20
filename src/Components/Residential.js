import React, { useEffect, useState, useCallback } from "react";
import "./styles/Residential.css";
import Card from "./Card";
import axios from "axios";
import * as actions from "../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./UI/Loading";

const Residential = ({ match, history }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const appliance = useSelector((state) => {
    return state.residential.appliances;
  });

  const onInitAppliances = useCallback(
    () => dispatch(actions.initAppliance()),
    [dispatch]
  );

  const singlePageSelector = (id) => {
    history.push({
      pathname: `${match.url}/` + id,
    });
  };

  useEffect(() => {
    onInitAppliances();
  }, []);

  return (
    <div className="residential">
      <h1>Residential Appliances</h1>
      <div className="res__cards__outer">
        <div className="res__cards">
          {appliance ? (
            appliance.map((app) => {
              return (
                <Card
                  onClick={() => singlePageSelector(app.id)}
                  key={app.id}
                  name={app.name}
                  image={app.image}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Residential;
