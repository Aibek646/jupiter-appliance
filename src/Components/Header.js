import React, { useState } from "react";
import "../Components/styles/Header.css";

import HeaderOption from "../Components/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import Services from "@material-ui/icons/Build";
import Review from "@material-ui/icons/Receipt";
import Call from "@material-ui/icons/Call";
import Face from "@material-ui/icons/Face";
import ModalForm from "./ModalForm";
import AuthForm from "../Components/UI/AuthForm";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [form, changeForm] = useState(false);
  const close = () => {
    changeForm(false);
    setOpenLogin(false);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src="/Jupiter-Appliance.png" alt="Logo" />
      </div>
      <div className="header__right">
        <HeaderOption link={"/"} Icon={HomeIcon} title="Home" />
        <HeaderOption
          onClick={() => setOpenLogin(true)}
          link={"#"}
          Icon={Face}
          title="Login"
        />
        <HeaderOption Icon={Services} title="Service" />
        <HeaderOption link={"/review"} Icon={Review} title="Review" />

        <HeaderOption newStyle="-20px" Icon={Call} title="650-922-2494" />
        <ModalForm
          form={form}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
        >
          <AuthForm form={form} select={() => changeForm(true)} close={close} />
        </ModalForm>
      </div>
    </div>
  );
};

export default Header;
