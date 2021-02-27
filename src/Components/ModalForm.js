import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import "../Components/styles/Login.css";

const ModalForm = (props) => {
  const { title, children, openLogin, setOpenLogin, form } = props;
  return (
    <Dialog open={openLogin}>
      <DialogTitle>
        {!form ? <p>Please Sign In</p> : <p>Please create an account</p>}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalForm;
