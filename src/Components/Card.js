import React, { useState } from "react";
import "./styles/Card.css";

const Card = ({ name, image, key, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <img className="card__image" src={image} alt="" />

      <div className="card__title">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Card;
