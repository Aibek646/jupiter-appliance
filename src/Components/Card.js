import React, { useState } from "react";
import "./styles/Card.css";

const Card = ({ name, image, key, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <img src={image} alt="image-new" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
