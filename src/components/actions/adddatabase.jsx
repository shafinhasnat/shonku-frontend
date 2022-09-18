import React, { useState, useEffect } from "react";
import Modl from "../common/modal";
import useStyles from "../../assets/styles";
import { Button, TextField } from "@material-ui/core";
import { create_app, launch } from "../../api/api";
const AddDatabase = (props) => {
  const [projectName, setProjectName] = useState("todoapp");
  const [url, setUrl] = useState("");
  const classes = useStyles();

  const handleClick = () => {
    const payload = { app_name: projectName };
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
        <div className={classes.modalChildDiv}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={url}
              //onChange={onChange}
              //helperText={error} // error message
              //error={!!error}
            />
          </div>
          <div className={classes.buttonDiv}>
            <Button className={classes.closeButton} onClick={props.onClose}>
              Close
            </Button>
            <Button
              className={classes.confirmButton}
              onClick={handleClick}
              //disabled={error}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </Modl>
  );
};
export default AddDatabase;
