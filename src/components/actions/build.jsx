import React, { useState, useEffect } from "react";
import Modl from "../common/modal";
import useStyles from "../../assets/styles";
import { Button, TextField } from "@material-ui/core";
import { create_app, initialize_build, build } from "../../api/api";
const Build = (props) => {
  const classes = useStyles();
  const handleClick = () => {
    console.log("sdfadfasdfasd");
    const payload = { app_name: props.selected.app_name };
    initialize_build(payload.app_name)
      .then((res) => {
        build(payload)
          .then((res) => props.onClose())
          .catch((err) => props.onClose());
      })
      .catch((err) => props.onClose());
  };
  return (
    <Modl toggleModal={true}>
      <div className={classes.modalParentDiv}>
        <div className={classes.modalChildDiv}>
          <div>Build project: {props.selected.app_name}</div>
          <div className={classes.buttonDiv}>
            <Button className={classes.closeButton} onClick={props.onClose}>
              Close
            </Button>
            <Button
              className={classes.confirmButton}
              onClick={handleClick}
              //   disabled={error}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </Modl>
  );
};
export default Build;
