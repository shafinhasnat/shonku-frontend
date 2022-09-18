import {
  Button,
  MenuItem,
  MenuList,
  Popper,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { create_app, down, up } from "../api/api";
import useStyles from "../assets/styles";
import AddDatabase from "../components/actions/adddatabase";
import Build from "../components/actions/build";
import NewProject from "../components/actions/newproject";
import Upload from "../components/actions/upload";
import Modl from "../components/common/modal";
import Projects from "../components/projects";

const Home = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [action, setAction] = useState("");
  const [toggleAction, setToggleAction] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [selected, setSelected] = useState();
  const [disable, setDisable] = useState(false);
  const classes = useStyles();
  const handleModal = (act) => {
    setAction(act);
    setToggleModal(true);
  };
  const clearAll = () => {
    setToggleModal(false);
    setAction("");
    setToggleAction(false);
  };
  const handleClick = () => {
    if (action === "create") {
      const payload = { app_name: projectName };
      create_app(payload)
        .then((res) => {
          console.log(res.data);
          clearAll();
        })
        .catch((err) => {
          clearAll();
        });
    }
    if (action === "up") {
      up(selected.app_name)
        .then((res) => {
          clearAll();
        })
        .catch((err) => clearAll());
    }
    if (action === "down") {
      down(selected.app_name)
        .then((res) => {
          clearAll();
        })
        .catch((err) => clearAll());
    }
  };
  return (
    <div>
      <div>
        <div
          style={{
            float: "left",
            marginBottom: 20,
            // position: "absolute",
            // left: 0,
          }}
        >
          <Button
            className={classes.confirmButton}
            onClick={() => {
              setAction("new");
            }}
            style={{ marginLeft: 10 }}
            // disabled={!selected}
          >
            New Project
          </Button>
          <Button
            className={classes.confirmButton}
            onClick={() => {
              setAction("addDatabase");
            }}
            style={{ marginLeft: 10 }}
            // disabled={!selected}
          >
            ADD DATABASE
          </Button>
          <Button
            className={classes.confirmButton}
            onClick={() => {
              setToggleAction(!toggleAction);
            }}
            disabled={!selected}
          >
            Actions
          </Button>
        </div>
        <Popper
          open={toggleAction}
          style={{
            float: "right",
            backgroundColor: "#ecf0f1",
            padding: 5,
            marginTop: 50,
          }}
        >
          <MenuList>
            {selected?.build && selected?.dockerfile && (
              <MenuItem onClick={() => handleModal("up")}>
                <div style={{ padding: "0px 10px 0px 10px" }}>Up</div>
              </MenuItem>
            )}
            {selected?.build && selected?.dockerfile && (
              <MenuItem onClick={() => handleModal("down")}>
                <div style={{ padding: "0px 10px 0px 10px" }}>Down</div>
              </MenuItem>
            )}
            {selected && !selected?.codebase && (
              <MenuItem onClick={() => handleModal("upload")}>
                <div style={{ padding: "0px 10px 0px 10px" }}>Upload</div>
              </MenuItem>
            )}
            {selected && selected.codebase && (
              <MenuItem onClick={() => handleModal("build")}>
                <div style={{ padding: "0px 10px 0px 10px" }}>Deploy</div>
              </MenuItem>
            )}
          </MenuList>
        </Popper>
      </div>
      <Modl toggleModal={toggleModal}>
        <div className={classes.modalParentDiv}>
          <div className={classes.modalChildDiv}>
            {action === "create" && (
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
            )}
            {action === "up" && <div>Up project : {selected.app_name}</div>}
            {action === "down" && <div>Down project : {selected.app_name}</div>}
            <div className={classes.buttonDiv}>
              <Button className={classes.closeButton} onClick={clearAll}>
                Close
              </Button>
              <Button
                className={classes.confirmButton}
                onClick={handleClick}
                disabled={disable}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modl>
      {action === "new" && <NewProject onClose={clearAll} />}
      {action === "build" && <Build onClose={clearAll} selected={selected} />}
      {action === "upload" && <Upload onClose={clearAll} selected={selected} />}
      {action === "addDatabase" && (
        <AddDatabase selected={selected} onClose={clearAll} />
      )}
      {/* <Button onClick={() => setToggleModal(!toggleModal)}>
        Create New Project
      </Button> */}
      <Projects
        selected={(e) => {
          setSelected(e);
          console.log(e);
        }}
      />
    </div>
  );
};
export default Home;
