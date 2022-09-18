import React, { useState, useEffect } from "react";
import Modl from "../common/modal";
import useStyles from "../../assets/styles";
import { Button, TextField } from "@material-ui/core";
import { create_app, launch } from "../../api/api";
const AddDatabase = (props) => {
  const [url, setUrl] = useState("");
  const classes = useStyles();

  const handleClick = () => {
    const payload = { app_name: props.selected.app_name };
    launch(payload)
      .then((res) => {
        setUrl(res.data.uri);
        console.log(res.data);
      })
      .catch((err) => {
        props.onClose();
      });
  };
  return (
    <Modl toggleModal={true}>
      <div className={classes.modalParentDiv}>
        <h3>MongoDB URI</h3>
        <h4>Launch project: {props.selected.app_name}</h4>
        <div className={classes.modalChildDiv}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={url}
            />
          </div>
          <div className={classes.buttonDiv}>
            <Button className={classes.closeButton} onClick={props.onClose}>
              Close
            </Button>
            <Button className={classes.confirmButton} onClick={handleClick}>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </Modl>
  );
};
export default AddDatabase;
