import React from "react";
import "../Components/styles/HeaderOption.css";
import { Link } from "react-router-dom";

const HeaderOption = ({ Icon, title, onClick, link, newStyle }) => {
  return (
    <Link
      onClick={onClick}
      className="headerOption"
      to={link}
      style={{ marginLeft: newStyle }}
    >
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </Link>
  );
};

export default HeaderOption;
