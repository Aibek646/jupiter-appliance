import React, { useEffect, useState } from "react";
import "./styles/Residential.css";
import Card from "./Card";
import axios from "axios";

const Residential = () => {
  const [appliance, setAppliance] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://jupiter-appliance-default-rtdb.firebaseio.com/appliance.json"
      )
      .then((res) => {
        console.log(res.data);
        setAppliance(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="residential">
      <h1>This is a residential page</h1>
      <div className="res__cards">
        {appliance &&
          appliance.map((app) => {
            return <Card key={app.id} name={app.name} image={app.image} />;
          })}
      </div>
    </div>
  );
};

export default Residential;
