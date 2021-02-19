import React from "react";
import "../Components/styles/Header.css";
import HeaderOption from "../Components/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import Services from "@material-ui/icons/Build";
import Review from "@material-ui/icons/Receipt";
import Call from "@material-ui/icons/Call";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="/Jupiter-Appliance.png" alt="Logo" />
      </div>
      <div className="header__right">
        <HeaderOption link={"/"} Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={Services} title="Service" />
        <HeaderOption Icon={Review} title="Review" />
        <HeaderOption newStyle="-20px" Icon={Call} title="650-922-2494" />
      </div>
    </div>
  );
};

export default Header;
