import React, { useState, useEffect, useCallback } from "react";
import "../styles/EmployeeForm.css";
import { Grid, TextField, makeStyles, Button } from "@material-ui/core";
import * as actions from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "150%",
      margin: theme.spacing(2),
    },
  },
}));

const initialFValues = {
  email: "",
  name: "",
  password: "",
};

const AuthForm = ({ close, select, form }) => {
  const [values, setValues] = useState(initialFValues);
  const dispatch = useDispatch();
  const classes = useStyle();
  const onAuth = useCallback((email, password) =>
    dispatch(actions.auth(email, password))
  );

  const submitHandler = (event) => {
    event.preventDefault();
    onAuth(values.email, values.password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.root}>
        <Grid container>
          <Grid item xs={7}>
            <div className="x__button">
              <Button
                onClick={close}
                size="small"
                variant="contained"
                color="secondary"
              >
                X
              </Button>
            </div>

            {form ? (
              <>
                <TextField
                  variant="outlined"
                  label="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  value={values.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  label="Password"
                  value={values.password}
                  name="password"
                  onChange={handleInputChange}
                />{" "}
              </>
            ) : (
              <>
                <TextField
                  variant="outlined"
                  label="Email"
                  value={values.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  label="Password"
                  value={values.password}
                  name="password"
                  onChange={handleInputChange}
                />{" "}
              </>
            )}
            <div className="new__button">
              <Button
                onClick={submitHandler}
                variant="contained"
                color="primary"
              >
                Confirm
              </Button>
            </div>
            <div className="create__button">
              {!form && <Button onClick={select}>Create an account?</Button>}
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AuthForm;
