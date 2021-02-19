import React, { useState } from "react";
import "./styles/Card.css";

const Card = ({ name, image, key }) => {
  return (
    <div className="card">
      <img src={image} alt="image-new" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
