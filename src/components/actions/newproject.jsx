import React, { useState, useEffect } from "react";
import Modl from "../common/modal";
import useStyles from "../../assets/styles";
import { Button, TextField } from "@material-ui/core";
import { create_app } from "../../api/api";
const NewProject = (props) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();
  const onChange = (e) => {
    const newValue = e.target.value;
    if (!newValue.match(/[%<>\\$ '"]/)) {
      setError("");
    } else {
      setError("No special charecter");
    }
    setProjectName(e.target.value);
  };

  const handleClick = () => {
    const payload = { app_name: projectName };
    create_app(payload)
      .then((res) => {
        console.log(res.data);
        props.onClose();
      })
      .catch((err) => {
        props.onClose();
      });
  };
  return (
    <Modl toggleModal={true}>
      <div className={classes.modalParentDiv}>
        <div className={classes.modalChildDiv}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={projectName}
              onChange={onChange}
              helperText={error} // error message
              error={!!error}
            />
          </div>
          <div className={classes.buttonDiv}>
            <Button className={classes.closeButton} onClick={props.onClose}>
              Close
            </Button>
            <Button
              className={classes.confirmButton}
              onClick={handleClick}
              disabled={error}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </Modl>
  );
};
export default NewProject;
