import React, { useState, useEffect } from "react";
import Modl from "../common/modal";
import useStyles from "../../assets/styles";
import { Button, TextField } from "@material-ui/core";
import { upload_app } from "../../api/api";
const Upload = (props) => {
  const [file, setFile] = useState();
  const classes = useStyles();
  const handleClick = () => {
    upload_app({
      file,
      app_name: props.selected.app_name,
      language: "python",
    })
      .then((res) => {
        console.log(res.data);
        props.onClose();
      })
      .catch();
  };
  const handleUpload = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".zip";
    input.onchange = (e) => {
      console.log(e.target.files[0].name);
      setFile(e.target.files[0]);
    };
    input.click();
  };
  return (
    <Modl toggleModal={true}>
      <div className={classes.modalParentDiv}>
        <div className={classes.modalChildDiv}>
          <div>
            {<button onClick={handleUpload}>Upload</button>} {file?.name}
          </div>
          <div className={classes.buttonDiv}>
            <Button className={classes.closeButton} onClick={props.onClose}>
              Close
            </Button>
            <Button
              className={classes.confirmButton}
              onClick={handleClick}
              disabled={!file}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </Modl>
  );
};
export default Upload;
